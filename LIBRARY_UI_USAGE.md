# Using Library UI Components

This project is configured to import and use components from the `library-ui` project.

## Setup

The following has been configured:

1. **Vite Alias**: `@library-ui` → `../library-ui/src`
2. **TypeScript Path Mapping**: `@library-ui/*` → `../library-ui/src/*`
3. **Tailwind Config**: Includes library-ui source files for class scanning

## Importing Components

Import components using the `@library-ui` alias:

```tsx
import {
  Button,
  Input,
  Select,
  FileUpload,
  DateInput,
  InputWithPrefix,
  Toggle,
  Heading,
  Subheading,
  Modal,
  Accordion,
} from '@library-ui/components'
```

## Available Components

- **Button** - Multiple variants: `default`, `arrow`, `outline`, `icon`
- **Input** - Text input with rounded corners
- **Select** - Custom dropdown select
- **FileUpload** - File upload component
- **DateInput** - Date picker input
- **InputWithPrefix** - Input with country code prefix
- **Toggle** - Switch/toggle component
- **Heading** - Heading component (h1-h6)
- **Subheading** - Subheading/description text
- **Modal** - Modal dialog component
- **Accordion** - Expandable/collapsible sections

## Example Usage

See `src/components/library-ui-example.tsx` for a complete example.

```tsx
import { Button, Input, Heading } from '@library-ui/components'

function MyComponent() {
  return (
    <div>
      <Heading level="h1">My Page</Heading>
      <Input placeholder="Enter text..." />
      <Button>Click me</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="arrow" />
    </div>
  )
}
```

## Custom Colors

Buttons support custom colors via the `color` prop:

```tsx
<Button color="#9E8B61">Custom Color</Button>
<Button variant="icon" color="#9E8B61">
  <YourIcon />
</Button>
```

## Notes

- All components use Tailwind CSS classes
- The library-ui's Tailwind config (including custom colors and fonts) is included
- Components are fully typed with TypeScript
- Make sure both projects have compatible React versions




