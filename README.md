# Week5Prep
Coding Standard
- Use tab character for indentation.
- Indentation is 1 tab size.
- Each variable declaration statement must declare only one variable. Multiple variable declaration is not allowed.
- Related pieces of code must be placed in the same block.
- Blank line must be added between unrelated blocks of code for readability.
- Unused lines of code must be removed instead of being commented out.
- Opening parenthesis must be placed in the same line as the preceding token.
- 'Magic number' and 'magic string' are strictly prohibited.
- Single quotes are preferred to double quotes. Exceptionally, double quotes might be used if single quotes would require escaping.

Spaces
Before parenthesis
- Do not add before:
  - function declaration
  - function call

function foo() {
  return 0;
}

- Add before:
  - if
  - for
  - while
  - switch
  - catch
  - in function expression
 
if (i > 10) {
  for (var j = 0; j < 10; j++) {
    switch (j) {
      case 0:
        value = 'zero';
        break;
      case 1:
        value = 'one';
        break;
    }
  }
}

Around operators
- Add around
  - assignment operators (=, +=, ...)
  - logical operators (&&, ||)
  - equality operators (==, ===, !=, !==)
  - relational operators (<, >, <=, <=)
  - bitwise operators (&, |, ^, ...)
  - additive operators (+, -) and multiplication operators (\*, /, %)
  - shift operators (<<, >>, >>>, ...)
 
var a = 0,
    b = (i == j || j > 5),
    c = (j << 2) & 4,
    d += 1,
    e = a + d;

- Do not add around:
  - unary operators (!, -, +, ++, --_

j++;
bar = !foo;

Before left brace
- Add before:
  - function
  - 
