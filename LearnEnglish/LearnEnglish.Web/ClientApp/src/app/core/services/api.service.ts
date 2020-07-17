import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiCfg } from "src/app/shared/interfaces/api-cfg.interface";

@Injectable()
export class ApiService
{
    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string){ }

    public api(cfg: ApiCfg){
        
    }
}