# postcss-focus-hover

[![NPM](https://nodei.co/npm-dl/postcss-focus-hover.png?months=1)](https://nodei.co/npm/postcss-focus-hover/)

Small post plugin

SASS code

```
.foo{
    &:hover{
        display: none;
    }
}
```

Output

```
.foo:hover{
    display: none;
}

.foo:focus{
    display: none;
}
```

SASS code

```
.foo{
    &:only-hover{
        display: none;
    }
}
```

Output

```
.foo:hover{
    display: none;
}
```
