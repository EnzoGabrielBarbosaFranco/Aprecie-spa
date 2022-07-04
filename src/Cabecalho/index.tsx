<header className="cabecalho-sistema">
  <div className="cabecalho-sistema__container-primario">
    <button className="botao-hamburguer" aria-label="Menu principal">
      <span className="botao-hamburguer__linha-1"></span>
      <span className="botao-hamburguer__linha-2"></span>
      <span className="botao-hamburguer__linha-3"></span>
    </button>
    <a href="/">
      <img className="cabecalho-sistema__logo" width="105" src="../ativos/imagens/digix-ui-base-roxo.svg" alt="Logotipo do Digix UI"/>
    </a>
    <nav className="cabecalho-sistema__menu" aria-label="Menu principal">
      <ul className="cabecalho-sistema__lista-de-itens">
        <li>
          <a className="cabecalho-sistema__item-de-menu" href="#">Item</a>
        </li>
        <li>
          <a className="cabecalho-sistema__item-de-menu cabecalho-sistema__item-de-menu_ativo" href="#" aria-label="Com pílula - Você tem 456 novas notificações">Com pílula
            <span className="pilula pilula_cor-alerta pilula_com-animacao u-margem-esquerda-pequena">456</span>
          </a>
        </li>
        <li className="dropdown">
          <a className="cabecalho-sistema__item-de-menu" aria-haspopup="true" href="#">
                        Com subitem <i className="far fa-angle-down u-margem-esquerda-pequena"></i>
          </a>
          <ul className="dropdown__lista" aria-label="Submenu">
            <li className="dropdown__item">
              <a className="dropdown__link" href="#">
                <i className="far fa-folders dropdown__icone"></i>
                                Item 1
              </a>
            </li>
            <li className="dropdown__item">
              <a className="dropdown__link" href="#">
                <i className="far fa-tools dropdown__icone"></i>
                                Item 2
              </a>
            </li>
            <li className="dropdown__item">
              <a className="dropdown__link" href="#">
                <i className="far fa-sync dropdown__icone"></i>
                                Item 3
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
  <div className="cabecalho-sistema__container-secundario">
    <nav className="cabecalho-sistema__menu" aria-label="Menu secundário">
      <ul className="cabecalho-sistema__lista-de-itens">
        <li className="dropdown dropdown_direita">
          <button className="cabecalho-sistema__item-de-menu" aria-label="Opções para o usuário Administrador" aria-haspopup="true">
            <span className="cabecalho-sistema__icone-do-usuario">
              <i className="far fa-user"></i>
            </span>
            <span className="cabecalho-sistema__nome-do-usuario">Luís Augusto</span>
            <i className="far fa-angle-down u-margem-esquerda-pequena"></i>
          </button>
          <ul className="dropdown__lista" aria-label="Submenu">
            <li className="dropdown__item">
              <a className="dropdown__link" href="#">
                <i className="far fa-exchange dropdown__icone"></i>
                                Trocar senha
              </a>
            </li>
            <li className="dropdown__item">
              <a className="dropdown__link" href="#">
                <i className="far fa-sign-out dropdown__icone"></i>
                                Sair
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</header>;