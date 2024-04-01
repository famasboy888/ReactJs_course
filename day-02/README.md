# Using of Props

Using `&&` as conditional rendering.

Example: 

```bash
const [isPending, setIsPending] = useState(true);

{ isPending && <div>Loading...</div> }
```

`isPending` is always `true`. It will proceed to look at after `&&` which renders `<div>Loading...</div>`



