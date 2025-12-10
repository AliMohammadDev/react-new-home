import { Accordion, AccordionItem } from '@heroui/accordion';
import { Checkbox } from '@heroui/react';

const ProductFilters = () => {
  return (
    <Accordion>
      <AccordionItem key="1" aria-label="Categories" title="Categories">
        <ul className="space-y-1">
          <li>
            <Checkbox label="Cookware" /> Cookware
          </li>
          <li>
            <Checkbox label="Tableware" /> Tableware
          </li>
          <li>
            <Checkbox label="Drinkware" /> Drinkware
          </li>
          <li>
            <Checkbox label="Bakeware" /> Bakeware
          </li>
          <li>
            <Checkbox label="Kitchenware" /> Kitchenware
          </li>
          <li>
            <Checkbox label="For Home" /> For Home
          </li>
        </ul>
      </AccordionItem>

      <AccordionItem key="2" aria-label="Size" title="Size">
        <ul className="space-y-1">
          <li>
            <Checkbox label="Small" /> Small
          </li>
          <li>
            <Checkbox label="Medium" /> Medium
          </li>
          <li>
            <Checkbox label="Large" /> Large
          </li>
        </ul>
      </AccordionItem>

      <AccordionItem key="3" aria-label="Color" title="Color">
        <div className="flex flex-wrap gap-2">
          {[
            { color: 'bg-gray-800', label: 'Black' },
            { color: 'bg-red-600', label: 'Red' },
            { color: 'bg-green-600', label: 'Green' },
            { color: 'bg-yellow-400', label: 'Yellow' },
            { color: 'bg-purple-600', label: 'Purple' },
            { color: 'bg-pink-500', label: 'Pink' },
          ].map((c, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-full border border-gray-200 hover:bg-gray-200 transition`}
            >
              <span
                className={`w-3 h-3 rounded-full ${c.color} border border-white shadow-sm`}
              ></span>
              <span className="text-xs text-gray-800">{c.label}</span>
            </div>
          ))}
        </div>
      </AccordionItem>

      <AccordionItem key="4" aria-label="Price" title="Price">
        <ul className="space-y-1">
          <li>
            <Checkbox label="Small" /> Small
          </li>
          <li>
            <Checkbox label="Medium" /> Medium
          </li>
          <li>
            <Checkbox label="Large" /> Large
          </li>
        </ul>
      </AccordionItem>

      <AccordionItem key="5" aria-label="Material" title="Material">
        <ul className="space-y-1">
          <li>
            <Checkbox label="Small" /> Small
          </li>
          <li>
            <Checkbox label="Medium" /> Medium
          </li>
          <li>
            <Checkbox label="Large" /> Large
          </li>
        </ul>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductFilters;
