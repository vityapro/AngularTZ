import { Component, OnInit } from '@angular/core';
import { TabComponent } from "../tab.component";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ItemAuthor, ItemType } from "../../../services/item";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState, selectAuthorsLoaded } from "../../../store/models/app-state.model";
import { take } from "rxjs/operators";
import { authorsLoad } from "../../../store/actions/author.actions";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends TabComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  public itemTypes = ItemType;
  public itemTypesOptions = Object.values(ItemType);
  public authors$: Observable<ItemAuthor[]>;

  constructor(private store: Store<AppState>) {
    super();
    this.activeTab = this.tabs[2];
    this.initForm();
    this.authors$ = this.store.select('authors');
  }

  ngOnInit(): void {
    this.store.select(selectAuthorsLoaded)
      .pipe(take(1))
      .subscribe(authorsLoaded => {
        if (!authorsLoaded) this.store.dispatch(authorsLoad());
      });
  }

  initForm() {
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.minLength(7)]),
      author: new FormControl('', [Validators.required]),
      type: new FormControl(this.itemTypesOptions[0], [Validators.required]),
      book: new FormGroup({
        numberOfPages: new FormControl('', ),
      }),
      film: new FormGroup({
        runningTime: new FormControl('', ),
        closingCreditsTime: new FormControl('', ),
      }, this.typeValidation)
    }, this.typeValidation);
  }

  addItem(){
    console.log(this.form);
  }

  typeValidation() {
    return (form: FormGroup) => {
      console.log(form.value);
      if ( form.value.type === ItemType.Book) {

        if(!form.value.book.numberOfPages)
          return { validItem: true };
      } else if (form.value.type === ItemType.Film){
        if(!form.value.film.runningTime || !form.value.film.runningTime)
          return { validItem: true };
        if (form.value.film.runningTime < form.value.film.runningTime)
          return { validItem: true };
      }
      return null;
    };
  }

}
