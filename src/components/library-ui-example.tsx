/**
 * Example component demonstrating how to import and use components from library-ui
 * 
 * Import components using the @library-ui alias:
 * import { Button, Input, Select, etc. } from '@library-ui/components'
 */

import {
  Button,
  Input,
  Select,
  Heading,
  Subheading,
} from '@library-ui/components'

export function LibraryUIExample() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <Heading level="h2" className="mb-2">
          Library UI Components Example
        </Heading>
        <Subheading>
          These components are imported from the library-ui project
        </Subheading>
      </div>

      <div className="space-y-4">
        <div>
          <Button>Default Button</Button>
        </div>

        <div className="flex gap-4">
          <Button variant="outline">Outline Button</Button>
          <Button variant="arrow" />
          <Button variant="icon" color="#9E8B61">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </Button>
        </div>

        <div>
          <Input placeholder="Enter text..." />
        </div>

        <div>
          <Select
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' },
            ]}
            placeholder="Select an option"
          />
        </div>
      </div>
    </div>
  )
}

