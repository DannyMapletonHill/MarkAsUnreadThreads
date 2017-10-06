import { Injectable } from "@angular/core";
import { ThreadsService } from "app/services/threads.service";
import { Effect, Actions } from "@ngrx/effects";
import { THREAD_SELECTED_ACTION, ThreadSelectedAction } from "app/store/actions";


@Injectable()
export class MarkMessagesAsReadEffectService{

    constructor(private actions$: Actions, private threadsService: ThreadsService){}

@Effect({dispatch: false}) markMessagesAsRead$ = this.actions$.ofType(THREAD_SELECTED_ACTION)
                .switchMap((action:ThreadSelectedAction ) => 
                    this.threadsService.markMessagesAsRead(
                        action.payload.currentUserId, 
                        action.payload.selectedThreadId));

}