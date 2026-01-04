import { email, minLength, required, schema } from "@angular/forms/signals";

export const requiredAndMinLengthSchema = schema<string>((field) => {
    required(field, {message: 'Trường này là bắt buộc'});
    minLength(field, 5, {message: (context) => `Trường này phải có ít nhất 5 ký tự. Bạn nhập ${context.value().length} ký tự`})
})

export const requiredSchema = schema<string>((field) => {
    required(field, {message: 'Trường này là bắt buộc'})
})

export const emailSchema = schema<string>((field) => {
    required(field, {message: 'Trường này là bắt buộc'});
    email(field, {message: 'Email không hợp lệ'})
})