# To-Do List

## Description

The To-Do List project is a simple web application designed to help users organize their tasks. Users can add, delete, and mark tasks as completed. The application offers a user-friendly interface and leverages HTML, CSS, and JavaScript technologies.

## Table of Contents

- [Introduction](#introduction)
- [HTML Page](#html-page)
- [CSS Styles](#css-styles)
- [JavaScript Functions](#javascript-functions)
- [Assertion Functions](#assertion-functions)
- [Conclusion](#conclusion)

## Introduction

The To-Do List project is a simple web application designed to allow users to create, manage, and delete tasks. The application utilizes HTML, CSS, and JavaScript technologies to provide a user-friendly and interactive interface.

## HTML Page

The HTML page serves as the skeleton of the application, defining the webpage's structure and incorporating elements necessary for styling and behavior. Here's an overview of the main components of the HTML page:

- **Doctype and HTML Tag**: The document type declaration (`<!DOCTYPE html>`) specifies the version of HTML used. The `<html>` tag encompasses all content on the page.

- **Head Tag**: The `<head>` tag contains the page's metadata, such as the title, links to CSS stylesheets, and JavaScript scripts. It also specifies the character set and preferred color scheme.

- **Body Tag**: The `<body>` tag contains the main content of the page, including the header, task input area, task list, and JavaScript scripts.

- **Content Structure**: The content structure includes the To-Do List header, task input area, task list, and JavaScript scripts.

## CSS Styles

CSS styles are used to make the application visually appealing and user-friendly. Here's an overview of the applied CSS styles:

- **CSS Variables**: CSS variables are defined for background colors, text colors, and other reusable properties. This allows for efficient style management and facilitates future modifications.

- **Container Styles**: Container styles define the overall layout of the application, including width, margin, padding, and border.

- **Header Styles**: Header styles define the appearance of the To-Do List header, including alignment, margins, and element dimensions.

- **Input Styles**: Input styles define the appearance of the task input area, including width, margin, and font.

- **Button Styles**: Button styles define the appearance of application buttons, including background color, text color, and transitions.

- **List Styles**: List styles define the appearance of list items, including background color, margin, and transitions.

- **Completed Task Styles**: Completed task styles define the appearance of tasks marked as completed, including strikethrough text style and text color.

## JavaScript Functions

JavaScript functions in the application manage the logic and dynamic behavior of the user interface. Here's a detailed description of the main JavaScript functions:

- **addTask()**: This function is called when a user clicks the "Add Task" button or presses Enter after entering a task. It retrieves the user-entered value, creates a new task list item, adds it to the list, and saves tasks to local storage.

- **createTaskElement(taskText)**: This function creates a new task list element with the specified task text. It also creates a remove button to allow the user to delete the task.

- **handleOnKeyDown(event)**: This function is triggered when a user presses a key in the task input area. If the key is Enter, it calls the addTask() function to add the task.

- **createRemoveButton()**: This function creates a remove button for a given task. This button allows the user to delete a task from the list.

- **toggleTask()**: This function is called when a user clicks on a task to toggle its completion status. It adds or removes a CSS class to visually indicate the task's state and saves tasks to local storage.

- **removeTask(event)**: This function is called when a user clicks the remove button for a task. It removes the corresponding task list item from the user interface and saves the updated tasks to local storage.

- **saveTasksToLocalStorage()**: This function retrieves all tasks from the current list and saves them to local storage as a JSON object.

- **loadTasksFromLocalStorage()**: This function retrieves tasks saved in local storage. If tasks exist, it creates task list elements and displays them in the user interface.

- **toggleDarkTheme()**: This function manages toggling between light and dark themes of the application based on the state of the corresponding checkbox. It updates the appropriate CSS styles and saves theme preferences to local storage.

## Assertion Functions

These functions are used for verifying the correctness of the application's functionality. They utilize JavaScript's `console.assert()` method to assert specific conditions and log error messages if the conditions are not met.

- **testAddTask()**: This function verifies the behavior of adding a task to the task list. It simulates adding a task and then checks whether the number of task items in the list has increased by one after the addition.

- **testRemoveTask()**: This function verifies the behavior of removing a task from the task list. It simulates removing a task and then checks whether the number of task items in the list has decreased by one after the removal.

- **runAsserts()**: This function serves as a runner for the assertion functions. It invokes both `testAddTask()` and `testRemoveTask()` functions and logs a message indicating the completion of tests. These tests are automatically executed when the window loads.

## Conclusion

The To-Do List project is a simple yet effective web application for task management, built using HTML, CSS, and JavaScript technologies. With its user-friendly interface and essential functionalities like adding, deleting, and marking tasks as completed, it provides a convenient way for users to organize their tasks.

The project was developed over approximately 7-8 hours, including design, implementation, and testing phases. During development, attention was paid to both functionality and aesthetics to ensure a seamless user experience. The application leverages local storage for data persistence, allowing users to access their tasks even after refreshing the page or closing the browser.
