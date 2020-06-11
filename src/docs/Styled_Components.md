# React Styled Components (CSS)


[Repo](https://github.com/styled-components/styled-components)
[Documentation](https://www.styled-components.com/docs)
[API](https://www.styled-components.com/docs/api)
  - [styled](https://www.styled-components.com/docs/api#styled)
  - [TaggedTemplateLiteral](https://www.styled-components.com/docs/api#taggedtemplateliteral)
  - [Supported CSS](https://www.styled-components.com/docs/api#supported-css)
  - [TypeScript](https://www.styled-components.com/docs/api#typescript)
  - [Theme Interface - `declare your theme props`](https://www.styled-components.com/docs/api#define-a-theme-interface)
  - Helpers
    - [css](https://www.styled-components.com/docs/api#css-prop) 
    - [isStyledComponent](https://www.styled-components.com/docs/api#isstyledcomponent)
    - [withTheme](https://www.styled-components.com/docs/api#isstyledcomponent)
  - Test Utilities
    - [find](https://www.styled-components.com/docs/api#find)
    - [findAll](https://www.styled-components.com/docs/api#findAll)
    - [enzymeFind](https://www.styled-components.com/docs/api#find)
  [Tooling](https://www.styled-components.com/docs/tooling)
    - [Babel Plugin](https://www.styled-components.com/docs/tooling#babel-plugin)
  
   

#### Simple example

###### `DynamicFormStyles.js`
```javascript
import styled from 'styled-components';
const FormWrapperStyles = styled.div`
  min-width: 800px;
`;

export { FormWrapperStyles };
```
> Wraps our Form component inside a div, based on `styled.div`

```javascript
import { FormWrapperStyles } from './Styles/DynamicFormStyles'
const Form = () => {
  return (<DynamicFormStyles><Form>...</Form></DynamicFormStyles>)
}
```

#### SCSS like Styling / Nesting
[Reference](https://www.styled-components.com/docs/basics#pseudoelements-pseudoselectors-and-nesting)

```css
const Thing = styled.button`
  color: blue;

  ::before {
    content: '🚀';
  }

  :hover {
    color: red;
  }
`

render(
  <Thing>Hello world!</Thing>
)
```

#### Extend / merge multiple styles

[Reference](https://www.styled-components.com/docs/basics#extending-styles)

```javascript
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

render(
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
);
```
#### Passed props
[Reference](https://www.styled-components.com/docs/basics#passed-props)
```javascript
// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
`;

// Render a styled text input with the standard input color, and one with a custom input color
render(
  <div>
    <Input type="text" />
    <Input type="text" inputColor="rebeccapurple" />
  </div>
);
```
#### Style Objects (Supports components that only use style objects)
> styled-components optionally supports writing CSS as JavaScript objects instead of strings. This is particularly useful when you have existing style objects and want to gradually move to styled-components.

```javascript
// Static object
const Box = styled.div({
  background: 'palevioletred',
  height: '50px',
  width: '50px'
});

// Adapting based on props
const PropsBox = styled.div(props => ({
  background: props.background,
  height: '50px',
  width: '50px'
}));

render(
  <div>
    <Box />
    <PropsBox background="blue" />
  </div>
);
```

#### Theming
[Reference](https://www.styled-components.com/docs/advanced#theming)

```javascript
// Define our button
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// Define what main theme will look like
const theme = {
  main: "mediumseagreen"
};

render(
  <div>
    <Button theme={{ main: "royalblue" }}>Ad hoc theme</Button>
    <ThemeProvider theme={theme}>
      <div>
        <Button>Themed</Button>
        <Button theme={{ main: "darkorange" }}>Overidden</Button>
      </div>
    </ThemeProvider>
  </div>
);
```
