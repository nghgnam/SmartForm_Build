# SmartForm Builder System Architecture

## 1. Overall System Architecture
```mermaid
graph TB
    subgraph Frontend
        UI[User Interface]
        subgraph Components
            AF[Auth Forms]
            FB[Form Builder]
            FP[Form Preview]
            DF[Dynamic Forms]
        end
        subgraph Services
            AS[Auth Service]
            FS[Form Service]
            VS[Validation Service]
        end
    end

    subgraph Backend
        subgraph API
            AC[Auth Controller]
            FC[Form Controller]
            MC[Media Controller]
        end
        subgraph Business
            AuthS[Auth Service]
            FormS[Form Service]
            MS[Media Service]
        end
        subgraph Database
            Users[(Users DB)]
            Forms[(Forms DB)]
            Media[(Media Storage)]
        end
    end

    UI --> Components
    Components --> Services
    Services --> API
    API --> Business
    Business --> Database
```

## 2. Authentication Flow
```mermaid
sequenceDiagram
    actor User
    participant UI as Frontend
    participant Auth as Auth Service
    participant API as Backend API
    participant DB as Database

    %% Login Flow
    User->>UI: Enter Credentials
    UI->>UI: Validate Input
    UI->>Auth: Submit Login
    Auth->>API: Authentication Request
    API->>DB: Verify Credentials
    DB-->>API: User Data
    API-->>Auth: JWT Token
    Auth-->>UI: Store Token
    UI-->>User: Login Success

    %% Protected Route Access
    User->>UI: Access Protected Route
    UI->>Auth: Check Token
    Auth->>API: Validate Token
    API-->>Auth: Token Valid
    Auth-->>UI: Grant Access
    UI-->>User: Show Protected Content
```

## 3. Form Builder Data Flow
```mermaid
graph LR
    subgraph User Actions
        C[Create Form]
        E[Edit Form]
        P[Preview Form]
        S[Save Form]
    end

    subgraph Form Builder
        FE[Form Editor]
        FC[Form Controls]
        VR[Validation Rules]
        PS[Property Settings]
    end

    subgraph Data Management
        FS[Form Service]
        CS[Cache Service]
        VS[Validation Service]
    end

    subgraph Storage
        API[Backend API]
        DB[(Database)]
        Cache[(Local Storage)]
    end

    C --> FE
    E --> FE
    FE --> FC
    FC --> VR
    FC --> PS
    P --> VS
    S --> FS
    FS --> CS
    FS --> API
    API --> DB
    CS --> Cache
```

## 4. Dynamic Form Rendering
```mermaid
graph TB
    subgraph Form Definition
        FD[Form Data]
        FM[Form Model]
        FC[Form Config]
    end

    subgraph Dynamic Form
        DF[Dynamic Form Component]
        VE[Validation Engine]
        RE[Rendering Engine]
    end

    subgraph UI Elements
        Input[Input Fields]
        Select[Select Fields]
        Radio[Radio Buttons]
        Check[Checkboxes]
        Custom[Custom Components]
    end

    FD --> FM
    FM --> FC
    FC --> DF
    DF --> VE
    DF --> RE
    RE --> Input
    RE --> Select
    RE --> Radio
    RE --> Check
    RE --> Custom
```

## 5. State Management
```mermaid
stateDiagram-v2
    [*] --> NotAuthenticated
    NotAuthenticated --> Authenticating: Login
    Authenticating --> Authenticated: Success
    Authenticating --> NotAuthenticated: Failure

    state Authenticated {
        [*] --> FormList
        FormList --> FormEditor: Create/Edit
        FormEditor --> FormPreview: Preview
        FormPreview --> FormEditor: Edit
        FormEditor --> FormList: Save
        
        state FormEditor {
            [*] --> Design
            Design --> Validation: Add Rules
            Validation --> Properties: Configure
            Properties --> Design: Update
        }
    }
```

## 6. Data Model
```mermaid
classDiagram
    class User {
        +String id
        +String email
        +String password
        +String[] roles
        +DateTime createdAt
        +Boolean isActive
    }

    class Form {
        +String id
        +String title
        +String description
        +Object schema
        +String[] fields
        +String createdBy
        +DateTime createdAt
        +DateTime updatedAt
    }

    class FormField {
        +String id
        +String type
        +String label
        +Boolean required
        +Object validation
        +Object properties
    }

    class FormSubmission {
        +String id
        +String formId
        +Object data
        +String submittedBy
        +DateTime submittedAt
    }

    User "1" -- "*" Form : creates
    Form "1" -- "*" FormField : contains
    Form "1" -- "*" FormSubmission : receives
``` 