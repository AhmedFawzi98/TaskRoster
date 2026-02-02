# TaskRoster

TaskRoster is a **feature-focused Angular application** for **Task management** built to practice and demonstrate **modern Angular (v16+) concepts**.

The application allows selecting a user and managing their tasks, including viewing, adding, and completing tasks, with a predictable data flow and a clean, component-driven UI.

---

## Preview

The UI consists of:
- A user list on the left
- A task panel showing tasks for the selected user
- An “Add Task” action that opens a modal form
- The ability to complete tasks


![TaskRoster preview 1](https://github.com/AhmedFawzi98/TaskRoster/blob/master/Preview/Preview.gif) 

---

## Core Concepts Applied

### Angular Fundamentals
- using Angular CLI 
- Angular project structure and feature-based organization

### Components
- Standalone components
- Angular modules 
- Component creation, registration and composition
- Content projection using `<ng-content>`

### Data Binding
- String interpolation
- Property binding
- Event binding
- Two-way binding using `ngModel`

### Component Communication
- Parent → child communication via `@Input`
- Child → parent communication via `@Output` and `EventEmitter`
- Clear separation between:
  - Presentational components (UI only)
  - Orchestrating components (workflow ownership)

### Flow Control Directives
- Modern control flow directives:
  - `@for`
  - `@if`
  - `@else`
- Legacy structural directives (*ngFor, *ngIf) for reference
- Conditional class binding 

### Change Detection
- Angular change detection fundamentals (zone based, signals based)

### Forms
- Template-driven forms `FormsModule`
- `ngModel` and `ngSubmit`


### Pipes
- Built-in pipes (e.g. `DatePipe`)


### Services & Dependency Injection
- Dependency Injection using `@Injectable`
- `providedIn: 'root'` and service lifetime
- Service resolution via constructor or inject() function

---

## Notes
- Data is currently static and in-memory
- The emphasis is on correct patterns, not feature completeness, although the structure is intentionally designed to evolve
- Project 2 main branches are:
    - **master** (using standalone components)   
    - **master-with-modules** (using angular modules)   

---

## Getting Started

### Install dependencies
```
npm install
```
### Run the application
``` 
ng serve 
```

### Navigate to: 
```
http://localhost:4200
```

