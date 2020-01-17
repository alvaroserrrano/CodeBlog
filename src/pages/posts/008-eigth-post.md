---
title: "Pass by reference vs pass by value"
date: 2020-01-09 05:00:00
author: "Alvaro Serrano"
image: ../../images/C.png
tags:
  - Code
  - Software
  - C
  - Systems programming
---

After being introduced to pointers, structs, arrays... in the C language, you quickly realize that in the strictest sense of the word, everything in C is pass-by-value.

Pass-by-value means passing a copy of a variable to a function. On the other hand, pass-by-reference means passing and alias of the variable to the function. C can pass a pointer into a function but that is still pass-by-value. When we pass a pointer to a function on C, we are still passing by value because we are copying the value of the pointer (address in memory) into the function.
Also, when we pass a pointer, C's syntax requires a dereference to be applied to get the value. However, in languages like Pascal and C++, that is not a requirement .

Let's take swap as an example:

```c
void swap(int a, int b);

    void swap(int a, int b) {
      int tmp = a;
      a = b;
      b = tmp;
    }

    int main()
    {
        int a = 1;
        int b = 2;
        printf("before swap a = %d\n", a);
        printf("before swap b = %d\n", b);
        swap(a, b);
        printf("after swap a = %d\n", a);
        printf("after swap b = %d\n", b);
    }
```

Here is the output:
before swap a = 1
before swap b = 2
after swap a = 1
after swap b = 2

We can see that the swap has taken no effect on our variables. This is because in pass by value, copies of the values are passed as parameters. This means that we are swapping the copies inside the function instead of the original variables.

Now, what if we used pointers?

```c
    void swap(int *a, int *b);

    void swap(int *a, int *b) {
      int tmp = *a;
      *a = *b;
      *b = tmp;
    }

    int main()
    {
        int a = 1;
        int b = 2;
        printf("before swap a = %d\n", a);
        printf("before swap b = %d\n", b);
        swap(&a, &b);
        printf("after swap a = %d\n", a);
        printf("after swap b = %d\n", b);
    }
```

Here is the output:
before swap a = 1
before swap b = 2
after swap a = 2
after swap b = 1

The output shows that the original a and b values have been successfully swapped. However, it is important to note that even though we are using pointers, we are still passing by value (we are passing copies of the pointers to a and b into the function). The function itself changes the values at those addresses but it is still being passed a copy of the pointer into the function, which is pass-by-value.
