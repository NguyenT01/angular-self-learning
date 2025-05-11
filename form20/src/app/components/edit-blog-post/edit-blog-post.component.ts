import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-blog-post',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-blog-post.component.html',
  styleUrl: './edit-blog-post.component.scss',
})
export class EditBlogPostComponent {
  private readonly fb = inject(FormBuilder);

  readonly invoiceLines = this.fb.array([this.createInvoiceGroup()]);

  createInvoiceGroup() {
    return this.fb.group({
      label: ['', Validators.required],
      quantity: [1, [Validators.min(1)]],
      price: [0, [Validators.min(0)]],
    });
  }

  addInvoice() {
    this.invoiceLines.push(this.createInvoiceGroup());
  }

  removeInvoice(index: number) {
    this.invoiceLines.removeAt(index);
  }

  readonly tagsArray = this.fb.array(['']);
  readonly blogPostForm = this.fb.group({
    title: '',
    content: '',
    tags: this.tagsArray,
    invoices: this.invoiceLines,
  });

  addTag() {
    this.tagsArray.push(this.fb.control(''));
  }

  removeTag(index: number) {
    this.tagsArray.removeAt(index);
  }

  submit() {
    console.log(this.blogPostForm.value);
  }
}
