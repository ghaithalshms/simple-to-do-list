## Choose your language

- [English](#to-do-list---en)
- [Français](#to-do-list---fr)

# To-Do List - EN

## Description

The To-Do List project is a simple web application designed to help users organize their tasks. Users can add, delete, and mark tasks as completed. The application offers a user-friendly interface and leverages HTML, CSS, and JavaScript technologies.

## Table of Contents

- [Introduction](#introduction)
- [HTML Page](#html-page)
- [CSS Styles](#css-styles)
- [JavaScript Functions](#javascript-functions)
- [Assertion Functions](#assertion-functions)
- [Issues Encountered](#issues-encountered)
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

## Issues Encountered

During the development of the to-do list application, several issues were encountered, including:

- **Local Storage Management**: Managing local storage to save tasks was a challenge, especially to ensure proper synchronization between the displayed task list and the stored data. This was resolved by using appropriate methods for reading and writing to local storage, as well as ensuring that update operations were performed atomically.

- **Task State Management**: Another challenge was to properly maintain the state of tasks (completed or not completed) when interacting with the user interface. This required precise handling of click events and updating the interface accordingly. The solution was to adopt an approach based on CSS classes and data attributes to represent the task state effectively.

- **Browser Compatibility**: Ensuring compatibility of the application with different browsers was also a challenge due to differences in support for certain JavaScript features and CSS rendering. An iterative debugging approach was adopted to identify and resolve browser-specific issues, using development tools and cross-browser testing.

## Conclusion

The To-Do List project is a simple yet effective web application for task management, built using HTML, CSS, and JavaScript technologies. With its user-friendly interface and essential functionalities like adding, deleting, and marking tasks as completed, it provides a convenient way for users to organize their tasks.

The project was developed over approximately 7-8 hours, including design, implementation, and testing phases. During development, attention was paid to both functionality and aesthetics to ensure a seamless user experience. The application leverages local storage for data persistence, allowing users to access their tasks even after refreshing the page or closing the browser.

# To-Do List - FR

## Description

Le projet de la liste de tâches est une application web simple conçue pour aider les utilisateurs à organiser leurs tâches. Les utilisateurs peuvent ajouter, supprimer et marquer des tâches comme terminées. L'application offre une interface conviviale et utilise les technologies HTML, CSS et JavaScript.

## Table des matières

- [Introduction](#introduction)
- [Page HTML](#page-html)
- [Styles CSS](#styles-css)
- [Fonctions JavaScript](#fonctions-javascript)
- [Fonctions d'Assertion](#fonctions-dassertion)
- [Problèmes Rencontrés](#problèmes-rencontrés)
- [Conclusion](#conclusion)

## Introduction

Le projet de la liste de tâches est une application web simple conçue pour permettre aux utilisateurs de créer, gérer et supprimer des tâches. L'application utilise les technologies HTML, CSS et JavaScript pour fournir une interface conviviale et interactive.

## Page HTML

La page HTML sert de squelette de l'application, définissant la structure de la page web et incorporant des éléments nécessaires pour le style et le comportement. Voici un aperçu des principaux composants de la page HTML :

- **Doctype et Balise HTML** : La déclaration du type de document (`<!DOCTYPE html>`) spécifie la version d'HTML utilisée. La balise `<html>` englobe tout le contenu de la page.

- **Balise Head** : La balise `<head>` contient les métadonnées de la page, telles que le titre, les liens vers les feuilles de style CSS et les scripts JavaScript. Elle spécifie également l'ensemble de caractères et le schéma de couleur préféré.

- **Balise Body** : La balise `<body>` contient le contenu principal de la page, y compris l'en-tête, la zone de saisie des tâches, la liste des tâches et les scripts JavaScript.

- **Structure du Contenu** : La structure du contenu comprend l'en-tête de la liste de tâches, la zone de saisie des tâches, la liste des tâches et les scripts JavaScript.

## Styles CSS

Les styles CSS sont utilisés pour rendre l'application visuellement attrayante et conviviale. Voici un aperçu des styles CSS appliqués :

- **Variables CSS** : Les variables CSS sont définies pour les couleurs de fond, les couleurs de texte et d'autres propriétés réutilisables. Cela permet une gestion efficace des styles et facilite les modifications futures.

- **Styles des Conteneurs** : Les styles des conteneurs définissent la mise en page générale de l'application, y compris la largeur, la marge, le rembourrage et la bordure.

- **Styles de l'En-tête** : Les styles de l'en-tête définissent l'apparence de l'en-tête de la liste de tâches, y compris l'alignement, les marges et les dimensions des éléments.

- **Styles des Entrées** : Les styles des entrées définissent l'apparence de la zone de saisie des tâches, y compris la largeur, la marge et la police de caractères.

- **Styles des Boutons** : Les styles des boutons définissent l'apparence des boutons de l'application, y compris la couleur de fond, la couleur du texte et les transitions.

- **Styles de la Liste** : Les styles de la liste définissent l'apparence des éléments de liste, y compris la couleur de fond, la marge et les transitions.

- **Styles des Tâches Terminées** : Les styles des tâches terminées définissent l'apparence des tâches marquées comme terminées, y compris le style de texte barré et la couleur du texte.

## Fonctions JavaScript

Les fonctions JavaScript dans l'application gèrent la logique et le comportement dynamique de l'interface utilisateur. Voici une description détaillée des principales fonctions JavaScript :

- **addTask()** : Cette fonction est appelée lorsqu'un utilisateur clique sur le bouton "Ajouter une tâche" ou appuie sur Entrée après avoir saisi une tâche. Elle récupère la valeur saisie par l'utilisateur, crée un nouvel élément de liste de tâches, l'ajoute à la liste et enregistre les tâches dans le stockage local.

- **createTaskElement(taskText)** : Cette fonction crée un nouvel élément de liste de tâches avec le texte de la tâche spécifié. Elle crée également un bouton de suppression pour permettre à l'utilisateur de supprimer la tâche.

- **handleOnKeyDown(event)** : Cette fonction est déclenchée lorsqu'un utilisateur appuie sur une touche dans la zone de saisie des tâches. Si la touche est Entrée, elle appelle la fonction addTask() pour ajouter la tâche.

- **createRemoveButton()** : Cette fonction crée un bouton de suppression pour une tâche donnée. Ce bouton permet à l'utilisateur de supprimer une tâche de la liste.

- **toggleTask()** : Cette fonction est appelée lorsqu'un utilisateur clique sur une tâche pour basculer son statut de réalisation. Elle ajoute ou supprime une classe CSS pour indiquer visuellement l'état de la tâche et enregistre les tâches dans le stockage local.

- **removeTask(event)** : Cette fonction est appelée lorsqu'un utilisateur clique sur le bouton de suppression pour une tâche. Elle supprime l'élément de liste de tâches correspondant de l'interface utilisateur et enregistre les tâches mises à jour dans le stockage local.

- **saveTasksToLocalStorage()** : Cette fonction récupère toutes les tâches de la liste actuelle et les enregistre dans le stockage local sous forme d'objet JSON.

- **loadTasksFromLocalStorage()** : Cette fonction récupère les tâches enregistrées dans le stockage local. Si des tâches existent, elle crée des éléments de liste de tâches et les affiche dans l'interface utilisateur.

- **toggleDarkTheme()** : Cette fonction gère le basculement entre les thèmes clair et sombre de l'application en fonction de l'état de la case à cocher correspondante. Elle met à jour les styles CSS appropriés et enregistre les préférences de thème dans le stockage local.

## Fonctions d'Assertion

Ces fonctions sont utilisées pour vérifier la correction de la fonctionnalité de l'application. Elles utilisent la méthode `console.assert()` de JavaScript pour affirmer des conditions spécifiques et consigner des messages d'erreur si les conditions ne sont pas remplies.

- **testAddTask()** : Cette fonction vérifie le comportement de l'ajout d'une tâche à la liste de tâches. Elle simule l'ajout d'une tâche, puis vérifie si le nombre d'éléments de tâche dans la liste a augmenté d'un après l'ajout.

- **testRemoveTask()** : Cette fonction vérifie le comportement de la suppression d'une tâche de la liste de tâches. Elle simule la suppression d'une tâche, puis vérifie si le nombre d'éléments de tâche dans la liste a diminué de un après la suppression.

- **runAsserts()** : Cette fonction sert d'exécuteur pour les fonctions d'assertion. Elle invoque à la fois les fonctions `testAddTask()` et `testRemoveTask()` et consigne un message indiquant la fin des tests. Ces tests sont automatiquement exécutés lorsque la fenêtre se charge.

## Problèmes Rencontrés

Au cours du développement de l'application de liste de tâches, plusieurs problèmes ont été rencontrés, notamment :

- **Gestion du Stockage Local** : La gestion du stockage local pour sauvegarder les tâches a été un défi, en particulier pour garantir la synchronisation correcte entre la liste de tâches affichée et les données stockées. Cela a été résolu en utilisant des méthodes appropriées pour la lecture et l'écriture dans le stockage local, ainsi qu'en veillant à ce que les opérations de mise à jour soient effectuées de manière atomique.

- **Gestion de l'État des Tâches** : Un autre défi était de maintenir correctement l'état des tâches (terminées ou non terminées) lors de l'interaction de l'utilisateur avec l'interface. Cela a nécessité une gestion précise des événements de clic et des mises à jour de l'interface en conséquence. La solution a été d'adopter une approche basée sur des classes CSS et des attributs de données pour représenter l'état des tâches de manière efficace.

- **Compatibilité des Navigateurs** : Assurer la compatibilité de l'application avec différents navigateurs a également été un défi, en raison des différences de support pour certaines fonctionnalités JavaScript et de rendu CSS. Une approche de débogage itérative a été adoptée pour identifier et résoudre les problèmes spécifiques à chaque navigateur, en utilisant des outils de développement et des tests croisés.

## Conclusion

Le projet de la liste de tâches est une application web simple mais efficace pour la gestion des tâches, construite en utilisant les technologies HTML, CSS et JavaScript. Avec son interface conviviale et ses fonctionnalités essentielles telles que l'ajout, la suppression et le marquage des tâches comme terminées, elle offre un moyen pratique aux utilisateurs d'organiser leurs tâches.

Le projet a été développé en environ 7 à 8 heures, comprenant les phases de conception, d'implémentation et de test. Pendant le développement, une attention particulière a été portée à la fois à la fonctionnalité et à l'esthétique pour garantir une expérience utilisateur fluide. L'application utilise le stockage local pour la persistance des données, permettant aux utilisateurs d'accéder à leurs tâches même après le rafraîchissement de la page ou la fermeture du navigateur.
