# Using of Props

Using `&&` as conditional rendering.

Example: 

```bash
const [isPending, setIsPending] = useState(true);

{ isPending && <div>Loading...</div> }
```

`isPending` is always `true`. It will proceed to look at after `&&` which renders `<div>Loading...</div>`

Else,

If `isPending` is set to `false`. Then, it would not even bother to proceed with `&&` because the whole statement would be false.

```bash
const [isPending, setIsPending] = useState(false);

{ isPending && <div>Loading...</div> }
```



