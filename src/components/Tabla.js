import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { tableCustomStyles } from "../stylesheets/tableStyle.jsx";
import logo from "../imagenes/reporte.png";
import '../stylesheets/Tabla.css'

const columns = [
  {
    name: "Sr.No",
    selector: (row) => row.id,
  },
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Category",
    selector: (row) => row.category,
  },
  {
    name: "Price",
    selector: (row) => row.price,
  },
];

const conditionalRowStyles = [
  {
    when: row => row.price <= 20,
    style:{
      backgroundColor: 'red'
    },
  }
]

function Tabla(props) {
  const paginacionOpciones = {
    rangeSeparatorText: "de",
    selectAllRowsText: "Todos",
    noRowsPerPage: true,
  };

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const getProduct = async () => {
    try {
      const req = await fetch("https://fakestoreapi.com/products");
      const res = await req.json();
      setData(res);
      setFilter(res);
      const uniqueCategories = [...new Set(res.map((item) => item.category))];
      setCategories(uniqueCategories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    const result = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    if (selectedCategory) {
      const filteredByCategory = result.filter(
        (item) => item.category === selectedCategory
      );
      setFilter(filteredByCategory);
    } else {
      setFilter(result);
    }
  }, [search, selectedCategory, data]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleReportGeneration = () => {
    alert("Generando reporte...");
  };

  return (
    <DataTable
      columns={columns}
      data={filter}
      customStyles={tableCustomStyles}
      conditionalRowStyles={conditionalRowStyles}
      pagination
      paginationComponentOptions={paginacionOpciones}
      highlightOnHover
      subHeader
      subHeaderComponent={
        <div className="barra-tabla-contenedor">
          <input
            type="text"
            className="cuadro-busqueda"
            placeholder="Buscar producto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="boton-filtro"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option className= "filtro-opciones" value="">Todos</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button
            className="boton-reportes"
            onClick={handleReportGeneration}
          >
            <img src={logo} alt="Logo" className="logo" /> Generar Reporte
          </button>
        </div>
      }
      subHeaderAlign="center"
      
    />
  );
}

export default Tabla;