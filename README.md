# React Carousel Calendar

- React calendar with carousel style.
- `Check-in`, `Check-out` changes status by selection, and the status is available as a Date object.

## Installation

`npm install react-carousel-calendar`

## Demo

A minimal demo page can be found in `sample` directory,

![carousel-01](https://user-images.githubusercontent.com/58503584/172180204-34a3d6f2-9834-4a0a-81d3-bb940a8670c6.gif)

## Usage

```jsx
import { Calendar, CalendarContainer, CalendarProvider } from '../dist';

function App() {
  return (
    <div className='App'>
      <h1>Hello Calendar</h1>
      <CalendarProvider>
        <CalendarContainer>
          <Calendar />
        </CalendarContainer>
      </CalendarProvider>
    </div>
  );
}

export default App;
```

If you want to use the selected date (ex. check-in, check-out), [Please check](https://github.com/healtheloper/react-carousel-calendar/blob/master/sample/App.jsx) the `SampleCheckin`, `SampleCheckout` Component as well.

![carousel-02](https://user-images.githubusercontent.com/58503584/172180647-10f10260-32af-4118-942c-54860dc54343.gif)

## User Guide

### CalendarProvider

#### Props

| Prop name       | Description                                        | Default value                            | Example value          |
| --------------- | -------------------------------------------------- | ---------------------------------------- | ---------------------- |
| lang            | Language to be displayed on the calendar           | user's `navigator.language` or `'en-US'` | `'en-US'` or `'ko-KR'` |
| isPastClickable | Decide if you want to click on a date before today | `false`                                  | `false` or `true`      |

If you want to add language, please [issue](https://github.com/healtheloper/react-carousel-calendar/issues) to me 😊

### CalendarContainer

- Container is optional, if you have any container, you can use that. Just I recommend I just recommend `5:3 width, height` ratio, and min-width `400px`

#### Props

| Prop name   | Description                                                                          | Default value | Example value          |
| ----------- | ------------------------------------------------------------------------------------ | ------------- | ---------------------- |
| width       | Calendar Container's width                                                           | `50`          | use Number value       |
| height      | Calendar Container's height, if you don't give this, it's calculated by aspect ratio | `30`          | use Number value       |
| cssUnit     | Width's and Height's unit                                                            | `'rem'`       | `'rem'`, `'px'`, ..etc |
| noPadding   | Delete container's default padding                                                   | `false`       | `false` or `true`      |
| noBoxShadow | Delete container's default box shadow                                                | `false`       | `false` or `true`      |
| cStyle      | If you want to add a custom style, add it here. like inline style                    | `null`        | `'color: blue;'`       |
