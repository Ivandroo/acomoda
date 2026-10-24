import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import { notFound } from "next/navigation";
import { imoveis, TipoImovel } from '@/data/imoveis'

export default async function ImovelPage({
	params,
}: {
	params: { id: string } | Promise<{ id: string }>;
}) {
	const { id } = await params;

	const idNumber = Number(id)

	const imovel = Number.isInteger(idNumber)
  ? imoveis.find((item) => item.id === idNumber)
  : undefined;

	if (!imovel) notFound();

	return (
		<main
			style={{
				maxWidth: 1100,
				margin: "0 auto",
				padding: "32px 20px 60px",
				color: "#18212f",
				fontFamily: "Arial, sans-serif",
			}}
		>
			<PageTitle title={imovel.titulo} subtitle={imovel.titulo} />

			<Link href="/imoveis" style={{ color: "#2563eb", textDecoration: "none" }}>
				← Voltar aos imóveis
			</Link>

			<h1 style={{ margin: "24px 0 8px", fontSize: 32 }}>{imovel.titulo}</h1>
			<p style={{ margin: "0 0 24px", color: "#64748b" }}>📍 {imovel.local}</p>

			<img
				src={imovel.imagem}
				alt={imovel.titulo}
				style={{ width: "100%", height: 440, objectFit: "cover", borderRadius: 16 }}
			/>

			<section
				style={{
					display: "grid",
					gridTemplateColumns: "minmax(0, 1fr) 300px",
					gap: 32,
					marginTop: 28,
				}}
			>
				<div>
					<h2>Sobre este espaço</h2>
					<p style={{ color: "#475569", lineHeight: 1.7 }}>{imovel.descricao}</p>
					<p style={{ color: "#475569" }}>
						{imovel.hospedes} hóspedes · {imovel.quartos} quartos
					</p>
				</div>

				<aside
					style={{ border: "1px solid #e2e8f0", borderRadius: 14, padding: 20, height: "fit-content" }}
				>
					<strong style={{ fontSize: 22 }}>{imovel.preco}</strong>
					<span style={{ color: "#64748b" }}> / noite</span>
					<a
						href={`mailto:reservas@example.com?subject=${encodeURIComponent(`Reserva: ${imovel.titulo}`)}`}
						style={{
							display: "block",
							marginTop: 18,
							padding: 13,
							borderRadius: 8,
							background: "#2563eb",
							color: "white",
							textAlign: "center",
							textDecoration: "none",
							fontWeight: 700,
						}}
					>
						Pedir reserva
					</a>
				</aside>
			</section>
		</main>
	);
}
