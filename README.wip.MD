# MoVMnT

MoVMnT is yet another stack-based virtual machine, made for learning purposes.

## Instructions

### call

### jmp

Jumping is used to continue code execution at another point in the program.

`jmp <address>` - Jump to a particular instruction  
`jmp` - Jump to whatever the stack is pointing to

## Concepts

### Defining functions

Functions can be defined using good ol' labels. Indentation is important to define what the contents are of the function.

```
my_snazzy_name:
    <function instructions here, indented>
```

### Calling functions

Doing this involves a few steps:

1. `push $ip` to push the address of the instruction pointer to the stack
2. `push <i32>` as many values as there are function parameters
3. `jmp <label>` to start executing the function  
   (Note: the compiler translates labels into concrete addresses, so the final binary is really jumping to a particular address)
