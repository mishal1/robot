# Martian Robots

This project is my attempt to do the Martian Robot challenge in a functional way rather than object oriented. To complete this application in a functional way I decided to focus on two main points. One was immutability. I tried to ensure none of my variables were modified. I decided to use recursion to aid with this to keep track of variables such as the previous position when adding scents. The other point I focused on was minimising side effects. I tried to keep in mind that my functions should not be changing anything outside of it and they should always return the same outputs if the input stays the same. There were some instances which I wasn't sure what the best practices were. For example I wasn't sure how the robot should call methods from instruction and planet. If I had more time I would maybe dig a bit more to how to go about this. I would probably start off with trying to pass the instruction and planet objects to the robot when the main method is run and go from there. If I was happy with that solution then I would mock the objects in the tests. If I had time I would look into refactoring and simplifying the robot and input files. I would like it to be as simple as the instruction object functions. I would maybe look into if there are alternatives to using recursion whilst still ensuring immutability and passing variables over in the loop. 

### Setup
You will need [Yarn](https://yarnpkg.com/en/docs/install) installed locally.
```sh
$ yarn install
```

### Run:
To run the program with a default input file
```sh
$ yarn start
```
You can run your own input file by passing in the file as an additional argument
```sh
$ yarn start FILE_NAME
```

### Tests:
```sh
$ yarn run test
```