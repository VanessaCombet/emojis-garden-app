# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can find this project on GitHub:

- https://github.com/VanessaCombet/emojis-garden-app
- https://vanessacombet.github.io/emojis-garden-app/

## General Guidelines

### Requirements

- Each component must have its own file and appropriate prototypes.
- All styling must be in CSS files. No inline CSS! To structure your code well, we recommend you to have one CSS file per component.
- There must be no errors or warnings in the JS console.
- Your package.json file will be the one given
  You can't modify this package.json. The Sentinel will use its own version of it.

This is to ensure that 1) the Sentinel can run without internet access, 2) you don't use any other JavaScript libraries.

You can add an external CSS library (for example, the CSS part of Bootstrap) if you add the CSS files directly to your project.

### What this project is for (minimum recommended completion)

During the React initiation we led you through small exercices meant to teach you the basic principles and syntax.
You discovered what React was and how to write components.
Great, now how to develop a practical understanding of how to use React?
That's the goal of this project!
In this project, you will:

- Practice writing components for a specific use case
- Figure out how to coordinate components
- Manage state across all levels of your UI
- Translate UI requirements into React concepts

### Minimum recommended completion

At the end of the project, everybody should be completely comfortable with steps 1 to 3.

Steps 4 & 5 require more conceptual understanding and problem solving.

It's okay if you can't do them on your own at first, but once your team has figured out how to apply React concepts to those steps, you should be able to explain and reproduce what has been done.

## Step 1

As we just said, we’ll start by building a basic garden.
Your garden will be a 5x5 grid, with a button "Plant an Emoji".

In this garden we will be able to add and remove basic emojis.

When we click the “Plant an Emoji” button, a new emoji should appear in an available cell of the garden. Of course, if the garden is full, clicking the button will do nothing.

Clicking on an existing emoji will delete it from the garden.

### Implementation guidelines

You will create an App component that's rendered at the root node.

At this step, your App component should contain a state called garden.
garden will be an array of 25 values (because we have a 5x5 grid!) representing the cells of the garden.

Adding an emoji will therefore be equivalent to changing the garden state by changing the appropriate value in the array.

What those values are is up to you. Each cell can be a string, a boolean, an int… what matters is that you can have a value that encodes the absence/presence of an emoji.

## Step 2

At this step, we will make our emojis grow!

An emoji will be planted as a 🌱
-> then it will automatically grow into a 🌿
-> then it will automatically grow into a 🌳

The growth from one emoji to another will happen after 2 seconds.

💡 To implement this, you can use the setTimeout function. That function allows you to execute another function after a specific amount of time has passed.
What happens if an emoji is deleted and cannot grow anymore? Does your program still work in that case?

## Step 3

The next thing we will do is to have several gardens.

You will add a "Add Garden" button. This button will add new gardens when we click on it.

Each garden will have its own grid and its own "Plant an Emoji" button.

Every garden must be completely independent.
Reminder: make sure that your Garden component is in its own file (with proper prototypes!).
