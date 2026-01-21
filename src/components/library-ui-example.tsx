/**
 * Example component demonstrating Button component usage
 * 
 * The Button component is now a local component in this project:
 * import { Button } from '@/components/ui/button-library'
 */

import { Button } from '@/components/ui/button-library'

export function LibraryUIExample() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">
          Button Component Example
        </h2>
        <p className="text-gray-600">
          These buttons use the local Button component
        </p>
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
      </div>
    </div>
  )
}

