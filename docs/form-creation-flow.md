# Form Creation Flow

```mermaid
sequenceDiagram
    actor User
    participant FB as Form Builder UI
    participant FE as Form Editor
    participant VS as Validation Service
    participant FS as Form Service
    participant API as Backend API
    participant DB as Database
    participant Cache as Local Cache

    %% Initial Form Creation
    User->>FB: Access Form Builder
    FB->>FS: Check User Permissions
    FS->>API: Validate Session
    API-->>FS: Session Valid
    FS-->>FB: Show Form Builder Interface

    %% Form Design Process
    User->>FE: Create New Form
    FE->>Cache: Save Initial Draft
    User->>FE: Add Form Fields
    Note over User,FE: Drag & Drop Fields:<br/>Text, Number, Select,<br/>Radio, Checkbox, etc.

    %% Field Configuration
    User->>FE: Configure Field Properties
    FE->>VS: Validate Field Settings
    VS-->>FE: Validation Results
    FE->>Cache: Auto-save Changes
    Cache-->>FE: Save Confirmed

    %% Add Validation Rules
    User->>FE: Add Field Validation Rules
    FE->>VS: Check Rule Compatibility
    VS-->>FE: Rules Validated
    FE->>Cache: Save Rules

    %% Form Preview
    User->>FB: Request Preview
    FB->>FE: Generate Preview
    FE-->>FB: Preview Ready
    FB-->>User: Show Live Preview

    %% Save Form
    User->>FB: Save Form
    FB->>FS: Submit Form Data
    FS->>VS: Final Validation
    VS-->>FS: Validation Passed
    FS->>API: Save Form Request
    API->>DB: Store Form Data
    DB-->>API: Save Successful
    API-->>FS: Save Confirmed
    FS-->>FB: Show Success Message
    FB-->>User: Form Saved Successfully

    %% Optional: Form Publication
    User->>FB: Publish Form
    FB->>FS: Request Publication
    FS->>API: Update Form Status
    API->>DB: Set Status to Published
    DB-->>API: Status Updated
    API-->>FS: Publication Confirmed
    FS-->>FB: Show Publication Success
    FB-->>User: Form Published & Ready
```

## Flow Description

1. **Initial Access & Authorization**
   - User accesses Form Builder
   - System validates user permissions and session

2. **Form Creation Start**
   - User initiates new form creation
   - System creates initial draft in local cache

3. **Form Design Process**
   - User adds various form fields through drag & drop
   - Each field addition is auto-saved
   - System validates field configurations in real-time

4. **Field Configuration**
   - User configures properties for each field
   - System validates settings and compatibility
   - Changes are automatically saved to prevent data loss

5. **Validation Rules**
   - User adds validation rules to fields
   - System checks rule compatibility
   - Rules are saved with field configurations

6. **Preview & Testing**
   - User can preview form at any time
   - System generates live preview
   - User can test form functionality

7. **Saving Process**
   - User saves the form
   - System performs final validation
   - Form data is stored in database
   - Success confirmation is shown

8. **Publication (Optional)**
   - User can publish the form when ready
   - System updates form status
   - Form becomes available for use 