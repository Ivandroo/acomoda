export type TipoImovel = "apartamento" | "residencia" | "quarto" | "hotel"

export const imoveis = [
    {
        id: 1,
        titulo: "Apartamento T2 no Talatona",
        tipo: "apartamento" as TipoImovel,
        preco: 45000,
        local: "Talatona, Luanda",
        descricao: "Apartamento moderno com 2 quartos, sala de estar espaçosa e cozinha equipada. Ideal para famílias.",
        imagem: "/house.jpg",
    },
    {
        id: 2,
        titulo: "Residencia com quintal",
        tipo: "residencia" as TipoImovel,
        preco: 120000,
        local: "Benfia",
        descricao: "Apartamento moderno com 2 quartos, sala de estar espaçosa e cozinha equipada. Ideal para famílias.",
        imagem: "/house.jpg",
    },
    {
        id: 3,
        titulo: "Quarto privado baía de luanda",
        tipo: "quarto" as TipoImovel,
        preco: 15000,
        local: "Baía de Luanda",
        descricao: "Apartamento moderno com 2 quartos, sala de estar espaçosa e cozinha equipada. Ideal para famílias.",
        imagem: "/house.jpg",
    },
    {
        id: 4,
        titulo: "Hotel boutique na ilha",
        tipo: "hotel" as TipoImovel,
        preco: 25000,
        local: "Luanda, ilha",
        descricao: "Apartamento moderno com 2 quartos, sala de estar espaçosa e cozinha equipada. Ideal para famílias.",
        imagem: "/house.jpg",
    },
    {
        id: 5,
        titulo: "Apartamento T3 no Nova vida",
        tipo: "apartamento" as TipoImovel,
        preco: 35000,
        local: "Nova vida, Luanda",
        descricao: "Apartamento moderno com 2 quartos, sala de estar espaçosa e cozinha equipada. Ideal para famílias.",
        imagem: "/house.jpg",
    },
]