function groceries(groceryItems) {
    // Check if the array is empty
    if (groceryItems.length === 0) {
        return '';
    }

    // If there is only one item, return it
    if (groceryItems.length === 1) {
        return groceryItems[0].item;
    }

    // If there are two items, join them with 'and'
    if (groceryItems.length === 2) {
        return `${groceryItems[0].item} and ${groceryItems[1].item}`;
    }

    // If there are more than two items, join them with commas and use 'and' for the last two
    const itemsExceptLastTwo = groceryItems.slice(0, -2).map(item => item.item).join(', ');
    const lastTwoItems = groceryItems.slice(-2).map(item => item.item).join(' and ');

    return `${itemsExceptLastTwo}, ${lastTwoItems}`;
}

// Example usage:
const groceryItems = [
    { item: 'apples' },
    { item: 'bananas' },
    { item: 'carrots' },
    { item: 'grapes' }
];

const result = groceries(groceryItems);
console.log(result);
