import { createSlice,type PayloadAction  } from "@reduxjs/toolkit";
import { loginUser, registerUser  } from "./authAction";

export interface Auth {
  _id?: string
  name?: string
  email?: string
  password?: string
  createdDate?: Date
}

type initialData = {
  loading: Boolean,
  error: any | undefined,
  users: Auth[]
  userToken: String | null
}


const initalState : initialData = {
  loading: false,
  userToken: null,
  error: null,
  users:[]
};

const authSlice = createSlice({
  name: "auth",
  initialState: initalState,
  reducers: {
    addNewUser: (state, action: PayloadAction<Auth>) => {
      state.users.push(action.payload)
    }
  },
  extraReducers: (builder) => {

    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log(action.payload, "gerh4")
      const data : any | undefined = action.payload
      console.log('useSlice data',data)
      if (data !== undefined) {
              state.users.push(data?.user)
            }
      state.loading = false;
     
   
    });
    // .addCase(addUser.fulfilled,
    //   (state, { payload }) => {
    //     const data: User | undefined = payload
    //     console.log('useSlice data', typeof (data))
    //     console.log('useSlice payload', typeof (payload))
    //     if (data !== undefined) {
    //       state.users.push(data)
    //     }
    //   })
    builder.addCase(registerUser.rejected, (state, action) => {
      console.log(action, "error")
      state.loading = false;
    
    });

    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log("from user slice", action.payload.data)

      state.loading = false;
      if(action.payload){
        state.users = action.payload.data;
      }
      state.userToken = action.payload.data.token;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = true;
      // state.error = action.error.message;
    });
    // builder.addCase(userDetails.pending, (state) => {
    //   state.loading = true;
    // });
    // builder.addCase(userDetails.fulfilled, (state, action) => {
    //   state.loading = false;
    //
    //   state.userInfo = action.payload.data.user;
    //   console.log(state.userInfo);
    // });
    // builder.addCase(userDetails.rejected, (state, action) => {
    //   state.loading = true;
    //   state.success = false;
    //   state.error = action.error.message;
    // });

    // // fetchUsers
    // builder.addCase(fetchUsers.pending, (state) => {
    //   state.loading = true;
    // })
    // builder.addCase(fetchUsers.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.error = null
    //   console.log("fetch users",action.payload.user);
    //   state.users = action.payload.user;
    // })
    // builder.addCase(fetchUsers.rejected, (state, action) => {
    //   state.loading = false
    //   state.error = action.error.message
    // })
  },
});


export default authSlice.reducer;