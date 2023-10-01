import { Repository } from "./repository"

export interface DataUser {
    id: string
    name: string
    email: string
    avatar: string
    token: string
    repositorys: Repository[]
    projects:Array<string>
}