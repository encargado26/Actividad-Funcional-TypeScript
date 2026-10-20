import { describe, expect, it } from "vitest";
import {ventas,obtenerVentasPagadas,obtenerImportesPagados} from "../src/Ventas";

describe("Ventas", () => {

	it("debería obtener solamente las ventas pagadas", () => {
		const resultado = obtenerVentasPagadas(ventas);
		expect(resultado).toHaveLength(4);
		expect(resultado.every(venta => venta.pagada)).toBe(true);
	});

	it("debería obtener los importes de las ventas pagadas", () => {
		const resultado = obtenerImportesPagados(ventas);

		expect(resultado).toEqual([
			25000,
			18000,
			32000,
			150000
		]);
	});
});