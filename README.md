This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Dev instructions:
1. Setup nodenv and node-build (google it)
2. cd into this folder and run `nodenv install`
3. `npm install -g yarn && nodenv rehash`
4. `yarn install`
5. `yarn web`

Firebase:
I haven't really worked out test and prod accounts yet.

cd into the firebase folder and then you can run all the firebase commands from this page: https://github.com/firebase/firebase-tools

## Cross platform base

This project mashes together the create-react-app-ts project and the create-react-native-app project.
The two aren't designed to play nicely together so here's what I did to make it basically work:

Steps to recreate this base project from scratch:
0. npm install -g create-react-native-app create-react-app-ts
1. create-react-native-app <projectname> --scripts-version=react-native-scripts-ts
2. create-react-app-ts web-temp
3. copy all the dependencies and devDependencies from web-temp package.json into the new native project package.json
4. copy src, public, tslint.json across to the new native project.
5. move tsconfig.json to tsconfig.native.json
6. copy tsconfig.json from web-temp to tsconfig.web.json in native project folder
7. add skipLibCheck: true to the compilerOptions in both tsconfig.web.json and tsconfig.native.json files
8. add the package.json scripts block from this project
9. run yarn and cross your fingers
10. run yarn web or yarn ios or yarn android.