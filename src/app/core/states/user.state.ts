import { CreateUser, SetSelectedUser } from './../actions/user.action';
import { UserService } from './../../shared/services/user.service';
import { User } from './../../shared/models/User';
import { State, Selector, Action, StateContext, Store } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { GetUsers } from '../actions/user.action';

export class UserStateModel {
    listOfUsers: User[];
    selectedUser: User;
}

@State<UserStateModel>({
  name: 'userstate',
  defaults:{
      listOfUsers: [],
      selectedUser: null
  }
})

export class UserState {
    constructor(private userService: UserService, private store: Store) {}
    @Selector()
    static getListOfUsers(state: UserStateModel) {
        return state.listOfUsers;
    }

    @Selector()
    static getSelectedUser(state: UserStateModel) {
        return state.selectedUser;
    }

    @Selector()
    static getUserState(state: UserStateModel) {
        return state;
    }


    @Action(SetSelectedUser)
    public setSelectedUser({patchState, getState}: StateContext<UserStateModel>, {payload}: SetSelectedUser){
        const state = getState();
        patchState({
            ...state,
            selectedUser: payload
        });
    }


    @Action(GetUsers)
    public getUsers(  {getState, patchState, setState}: StateContext<UserStateModel>) {
      const state = getState();
      return this.userService.getUsers().pipe(
          tap((users: User[]) => {
              patchState({
                  ...state,
                  listOfUsers: users
              });
              return users;
          }),
          catchError((error) => {
              return throwError(error);
          })
          );
    }

    @Action(CreateUser)
    public createtUser(  {getState, patchState}: StateContext<UserStateModel>, { payload } : CreateUser) {
      return this.userService.createUser(payload).pipe(
          tap((users: User[]) => {
              this.store.dispatch(new GetUsers());
              return users;
          }),
          catchError((error) => {
              return throwError(error);
          })
          );
    }

    
}