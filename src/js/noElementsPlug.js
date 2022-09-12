const refs = {
    noElementFound: document.querySelector('.no-element-found')
}

export function showNoElementsNotice() {
    refs.noElementFound.classList.remove('.is-hidden');
}

export function hideNoElementsNotice() {
    refs.noElementFound.classList.add('.is-hidden');
}