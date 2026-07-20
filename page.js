function calculatePagination(totalItems, itemsPerPage) {
  let remainingItems = totalItems;
  let fullPages = 0;

  while (remainingItems >= itemsPerPage) {
    fullPages++;
    remainingItems -= itemsPerPage;
  }

  const lastPageItems = remainingItems; // whatever's left over

  return {
    fullPages,
    lastPageItems,
    totalPages: lastPageItems > 0 ? fullPages + 1 : fullPages
  };
}

// Test case
console.log(calculatePagination(47, 10));
// { fullPages: 4, lastPageItems: 7, totalPages: 5 }