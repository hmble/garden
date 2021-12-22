---
title: "Hello Internet"
date: 2021-07-08
---

I made this blog this blog with hugo and tailwindcss JIT. You can watch take a look at [source code](https://github.com/hmble/garden).

All we have to do is add `jit` mode to our tailwind config file and run a command

```js {hl_lines=[2,3]}
module.exports = {
	mode: "jit",
	...
}
```

`tailwindcss -i ./static/tailwind.css -o ./static/main.css --jit -w`

Golang syntax

```go
package main

import (
	"fmt"
	"os"
)

func main() {
	fmt.Println(os.Getenv("HOME"))
}
```

Lists

- one
- two
- three
  - four

1. one
   - two
   - three
2. three
3. four
4. five

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5
