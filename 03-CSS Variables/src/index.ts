function handleUpdate(this: HTMLInputElement) {
    const suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + suffix
    );

    console.log(`--${this.name}`, this.value + suffix);
}

const inputs = document.querySelectorAll('.controls input');

inputs.forEach(input => {
    input.addEventListener('change', handleUpdate);
    input.addEventListener('mousemove', handleUpdate);
});