import Rodape from "../../components/rodape";
import { MagicMotion } from "react-magic-motion";
import "./index.scss";
import Cabe from "../../components/cabecalho";
import MenuUsuario from "../../components/MenuUsuario";
import VoltarButton from "../../components/voltar";

export default function Ajuda() {
	return (
		<MagicMotion>
			<div>
				<header>
					<MenuUsuario />
					<Cabe pesquisar={false} />
				</header>
				<main>
					<div className="pagina-ajuda">
						<VoltarButton />
						<div className="ajuda">
							<div>
								<h1>Como podemos ajudar ?</h1>

								<div className="perguntasErespostas">
									<details>
										<summary>Não encontrei um produto</summary>
										<div class="conteudo">
											<p>
												Se você não encontrou o que procura na nossa vitrine,
												entre em contato conosco pelo WhatsApp. Podemos ajudar a
												localizar o produto desejado ou oferecer sugestões
												similares.
											</p>
										</div>
									</details>
								</div>

								<div className="perguntasErespostas">
									<details>
										<summary>Quero fazer parte da equipe</summary>
										<div class="conteudo">
											<p>
												Ficamos felizes com seu interesse! Envie uma mensagem
												pelo WhatsApp com seu currículo e uma breve
												apresentação. Nossa equipe avaliará e entrará em contato
												se houver uma oportunidade.
											</p>
										</div>
									</details>
								</div>

								<div className="perguntasErespostas">
									<details>
										<summary>
											Quais são os horários de atendimento ao cliente?
										</summary>
										<div class="conteudo">
											<p>
												Atendemos pelo WhatsApp de segunda a sexta-feira, das 9h
												às 18h. Sinta-se à vontade para nos enviar uma mensagem
												durante esse horário!
											</p>
										</div>
									</details>
								</div>

								<div className="perguntasErespostas">
									<details>
										<summary>Como posso comprar os produtos?</summary>
										<div class="conteudo">
											<p>
												Para comprar, basta enviar uma mensagem pelo WhatsApp
												com os produtos que você deseja. Nossa equipe irá
												ajudá-lo com o pedido.
											</p>
										</div>
									</details>
								</div>

								<div className="perguntasErespostas">
									<details>
										<summary>Qual é o prazo de entrega?</summary>
										<div class="conteudo">
											<p>
												O prazo de entrega varia de acordo com a sua
												localização, mas geralmente leva de 3 a 10 dias úteis
												após a confirmação do pagamento.
											</p>
										</div>
									</details>
								</div>

								<div className="perguntasErespostas">
									<details>
										<summary>
											O que faço se eu tiver dúvidas sobre um produto?
										</summary>
										<div class="conteudo">
											<p>
												Sinta-se à vontade para nos enviar suas dúvidas pelo
												WhatsApp. Nossa equipe está pronta para ajudar com
												recomendações e informações detalhadas.
											</p>
										</div>
									</details>
								</div>

								<div className="perguntasErespostas">
									<details>
										<summary>
											Como posso entrar em contato com o suporte ao cliente?
										</summary>
										<div class="conteudo">
											<p>
												Você pode entrar em contato conosco pelo WhatsApp a
												qualquer momento durante nosso horário de atendimento.
												Estamos aqui para ajudar!
											</p>
										</div>
									</details>
								</div>

								<div className="perguntasErespostas">
									<details>
										<summary>Não encontrei um produto</summary>
										<div className="conteudo">
											<p>
												Se você não encontrou o que procura na nossa vitrine,
												entre em contato conosco pelo WhatsApp. Podemos ajudar a
												localizar o produto desejado ou oferecer sugestões
												similares.
											</p>
										</div>
									</details>
								</div>

								<div className="perguntasErespostas">
									<details>
										<summary>Quero fazer parte da equipe</summary>
										<div className="conteudo">
											<p>
												Ficamos felizes com seu interesse! Envie uma mensagem pelo
												WhatsApp com seu currículo e uma breve apresentação. Nossa
												equipe avaliará e entrará em contato se houver uma
												oportunidade.
											</p>
										</div>
									</details>
								</div>

								<div className="perguntasErespostas">
									<details>
										<summary>
											Quais são os horários de atendimento ao cliente?
										</summary>
										<div className="conteudo">
											<p>
												Atendemos pelo WhatsApp de segunda a sexta-feira, das 9h
												às 18h. Sinta-se à vontade para nos enviar uma mensagem
												durante esse horário!
											</p>
										</div>
									</details>
								</div>

								<div className="perguntasErespostas">
									<details>
										<summary>Como posso comprar os produtos?</summary>
										<div className="conteudo">
											<p>
												Para comprar, basta enviar uma mensagem pelo WhatsApp com
												os produtos que você deseja. Nossa equipe irá ajudá-lo com
												o pedido.
											</p>
										</div>
									</details>
								</div>

								<div className="perguntasErespostas">
									<details>
										<summary>Qual é o prazo de entrega?</summary>
										<div className="conteudo">
											<p>
												O prazo de entrega varia de acordo com a sua localização,
												mas geralmente leva de 3 a 10 dias úteis após a
												confirmação do pagamento.
											</p>
										</div>
									</details>
								</div>

								<div className="perguntasErespostas">
									<details>
										<summary>
											O que faço se eu tiver dúvidas sobre um produto?
										</summary>
										<div className="conteudo">
											<p>
												Sinta-se à vontade para nos enviar suas dúvidas pelo
												WhatsApp. Nossa equipe está pronta para ajudar com
												recomendações e informações detalhadas.
											</p>
										</div>
									</details>
								</div>

								<div className="perguntasErespostas">
									<details>
										<summary>
											Como posso entrar em contato com o suporte ao cliente?
										</summary>
										<div className="conteudo">
											<p>
												Você pode entrar em contato conosco pelo WhatsApp a
												qualquer momento durante nosso horário de atendimento.
												Estamos aqui para ajudar!
											</p>
										</div>
									</details>
								</div>
							</div>

							<img className="cosmet" src="/assets/images/faq/faq.svg" alt="" />
						</div>
					</div>
				</main>
				<footer>
					<Rodape />
				</footer>
			</div>
		</MagicMotion>
	);
}
