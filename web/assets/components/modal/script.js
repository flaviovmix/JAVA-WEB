/* ==========================================================
     NOVA TAREFA
   ========================================================== */
function novaTarefa() {
    setCamposHabilitados(true);
    document.getElementById("tituloModal").innerText = "Nova Tarefa";
    document.getElementById("botaoConfirmacao").innerText = "Salvar Registro";
    removeEstilo();
    document.getElementById("bgModal").classList.add("bg-nova");
    document.getElementById("botaoConfirmacao").classList.add("btn-novaTarefa");
    openModalTarefas('#nova-tarefa');
    document.getElementById("titulo").focus();
}

/* ==========================================================
     EDITAR TAREFA
   ========================================================== */
function editarTarefa() {
    setCamposHabilitados(true);
    document.getElementById("tituloModal").innerText = "Editar Tarefa";
    document.getElementById("botaoConfirmacao").innerText = "Editar Registro";
    removeEstilo();
    document.getElementById("bgModal").classList.add("bg-editar");
    document.getElementById("botaoConfirmacao").classList.add("btn-editarTarefa");
    openModalTarefas('#nova-tarefa');
    document.getElementById("titulo").focus();
}

/* ==========================================================
   EXCLUIR TAREFA
   ========================================================== */

function excluirTarefa() {
    setCamposHabilitados(false);
    document.getElementById("tituloModal").innerText = "Excluir Tarefa";
    document.getElementById("botaoConfirmacao").innerText = "Confirmar Exclusão";
    removeEstilo();
    document.getElementById("bgModal").classList.add("bg-excluir");
    document.getElementById("botaoConfirmacao").classList.add("btn-excluirTarefa");
    openModalTarefas("#excluir-tarefa");
}

/* ==========================================================
     ABRE O MODAL
   ========================================================== */
function openModalTarefas() {
    const overlay = document.getElementById('modalTarefas');
    const modal  = document.getElementById('bgModal');
    modal.classList.remove('shake-modal');
    modal.classList.remove('saindo');
    overlay.style.display = 'flex';
}

/* ==========================================================
     HABILITAR INPUTS
   ========================================================== */
function setCamposHabilitados(habilitar) {
    document.getElementById("titulo").disabled = !habilitar;
    document.getElementById("responsavel").disabled = !habilitar;
    document.getElementById("descricao").disabled = !habilitar;
    document.getElementById("data_criacao").disabled = !habilitar; 
    document.getElementById("status").disabled = !habilitar;
}

/* ==========================================================
     FECHAR MODAL
   ========================================================== */
function closeModalTarefas() {
    const overlay = document.getElementById('modalTarefas');
    const modal  = document.getElementById('bgModal');

    // anima saída
    modal.classList.add('saindo');

    setTimeout(() => {
        overlay.style.display = 'none';
        modal.classList.remove('saindo');

        if (location.hash) {
            history.back();
        }
    }, 200);
}

/* ==========================================================
     LIMPTAR ESTILO DO MODAL
   ========================================================== */
function removeEstilo() {
    // classes remover estilo do bg
    document.getElementById("bgModal").classList.remove("bg-nova");
    document.getElementById("bgModal").classList.remove("bg-editar");
    document.getElementById("bgModal").classList.remove("bg-excluir");
    
    // classes remover estilo do botão
    document.getElementById("botaoConfirmacao").classList.remove("btn-novaTarefa");
    document.getElementById("botaoConfirmacao").classList.remove("btn-excluirTarefa");
    document.getElementById("botaoConfirmacao").classList.remove("btn-editarTarefa");
}

/* ==========================================================
   SHAKE AO CLICAR FORA
   ========================================================== */
document
  .getElementById('modalTarefas')
  .addEventListener('click', function (e) {

    // clicou no overlay
    if (e.target.id === 'modalTarefas') {

      const modal = document.getElementById('bgModal');

      // reinicia animação
      modal.classList.remove('shake-modal');
      void modal.offsetWidth;
      modal.classList.add('shake-modal');

      document.getElementById("titulo").focus();
    }
  });

