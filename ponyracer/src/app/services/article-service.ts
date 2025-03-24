import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ArticleModel } from "../../models/article-model";

@Injectable({ providedIn: 'root' })
export class ArticleService{
    private readonly baseUrl = 'https://jsonplaceholder.typicode.com'
    private readonly token = '1234567890'

    constructor(private readonly http: HttpClient){

    }

    createArticle(article: ArticleModel){
        return this.http.post<ArticleModel>(`${this.baseUrl}/posts`, article)
    }

    getArticleWithAllHttpResponses(){
        return this.http.get<ArticleModel>(`${this.baseUrl}/posts/1`, {observe: 'response'});
    }

    getArticleCommentsWithParams(postId: number){
        return this.http.get<ArticleModel[]>(`${this.baseUrl}/comments`, {
            params: {
                postId
            },
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        });
    }

}

