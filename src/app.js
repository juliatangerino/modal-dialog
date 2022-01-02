export default function modal() {

    // Selecionando meu modal
    const modal = document.querySelector('#modal');

    // Selecionando o botão de abertura do modal
    const openModal = document.querySelector('#open-modal');

    // Selecionando o botão que fecha o modal
    const closeModal = document.querySelector('#close-modal');

    // O botão ao ser clicado abrira o modal
    openModal.addEventListener('click', () => {
        modal.show();
        modal.classList.add('open')
    })
    
    // O botão ao ser clicado fechara o modal
    closeModal.addEventListener('click', () => {
        modal.close();
        modal.classList.remove('open')
    })
};