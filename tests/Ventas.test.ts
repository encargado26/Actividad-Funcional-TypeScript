import { describe, expect, it } from "vitest";
import {ventas,obtenerVentasPagadas} from "../src/Ventas";

describe("Ventas", () => {

	it("debería obtener solamente las ventas pagadas", () => {
		const resultado = obtenerVentasPagadas(ventas);
		expect(resultado).toHaveLength(4);
		expect(resultado.every(venta => venta.pagada)).toBe(true);
	});
});