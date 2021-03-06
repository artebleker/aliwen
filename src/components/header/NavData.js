import {FiGift} from "react-icons/fi";

export const NavData = [
    {
      title: "Catálogo",
      path: "/catalogo",
      icon: null,
      dropdown:
      [
          {
            title: "Shampoo Solido",
            path: "/catalogo/shampoo-solido",
            icon: null,
          },
          {
            title: "Jabón Vegano",
            path: "/catalogo/jabon-vegano",
            icon: null,
          },
          {
            title: "Rolon",
            path: "/catalogo/rolon",
            icon: null,
          },
          {
            title: "Más...",
            path: "/catalogo/mas-productos",
            icon: null,
          },
      ]
    },
    {
      title: "Kits",
      path: "/kits-para-regalar",
      icon: <FiGift fontSize={20} color='#484545'/>
    },
    {
      title: "Nosotros",
      path: "/nosotros",
      icon: null
    },
    {
      title: "Mayorista",
      path: "/mayorista",
      icon: null
    }
  ]