import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UbicacionGarantiaComponent } from './components/ubicacion-garantia/ubicacion-garantia.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriasSIBComponent } from './components/categorias-sib/categorias-sib.component';
import { AgrupacionCreditosComponent } from './components/agrupacion-creditos/agrupacion-creditos.component';
import { AcercamientosComponent } from './components/acercamientos/acercamientos.component';
import { AlmacenadoraComponent } from './components/almacenadora/almacenadora.component';
import { ArchivosLimpiezaComponent } from './components/archivos-limpieza/archivos-limpieza.component';
import { AseguradorasComponent } from './components/aseguradoras/aseguradoras.component';
import { AsesoresPrestamoComponent } from './components/asesores-prestamo/asesores-prestamo.component';
import { BancosComponent } from './components/bancos/bancos.component';
import { CanalesVentaComponent } from './components/canales-venta/canales-venta.component';
import { CobrosAdicionalesComponent } from './components/cobros-adicionales/cobros-adicionales.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { DiasInhabilesComponent } from './components/dias-inhabiles/dias-inhabiles.component';
import { EstatusAvaluosComponent } from './components/estatus-avaluos/estatus-avaluos.component';
import { EstatusGarantiaRealComponent } from './components/estatus-garantia-real/estatus-garantia-real.component';
import { FormasDesembolsoComponent } from './components/formas-desembolso/formas-desembolso.component';
import { FormasPagoComponent } from './components/formas-pago/formas-pago.component';
import { FrecuenciasAmortizacionComponent } from './components/frecuencias-amortizacion/frecuencias-amortizacion.component';
import { GarantiasContablesComponent } from './components/garantias-contables/garantias-contables.component';
import { IngenierosValuadoresComponent } from './components/ingenieros-valuadores/ingenieros-valuadores.component';
import { InstitucionesCobrosAdicionalesComponent } from './components/instituciones-cobros-adicionales/instituciones-cobros-adicionales.component';
import { LugaresInversionComponent } from './components/lugares-inversion/lugares-inversion.component';
import { MotivosAjustesComponent } from './components/motivos-ajustes/motivos-ajustes.component';
import { MotivosReferenciasClientesComponent } from './components/motivos-referencias-clientes/motivos-referencias-clientes.component';
import { MotivosReservasComponent } from './components/motivos-reservas/motivos-reservas.component';
import { NotariosComponent } from './components/notarios/notarios.component';
import { ParametrizacionNumeroPrestamoComponent } from './components/parametrizacion-numero-prestamo/parametrizacion-numero-prestamo.component';
import { PasosCierreComponent } from './components/pasos-cierre/pasos-cierre.component';
import { RelacionTransaccionDepositosComponent } from './components/relacion-transaccion-depositos/relacion-transaccion-depositos.component';
import { TiposCanalesDistribucionComponent } from './components/tipos-canales-distribucion/tipos-canales-distribucion.component';
import { TiposDeduccionesComponent } from './components/tipos-deducciones/tipos-deducciones.component';
import { TiposPrestamosComponent } from './components/tipos-prestamos/tipos-prestamos.component';
import { TiposTransaccionesComponent } from './components/tipos-transacciones/tipos-transacciones.component';
import { OrigenFondosComponent } from './components/origen-fondos/origen-fondos.component';
import { MediosContactoComponent } from './components/medios-contacto/medios-contacto.component';
import { MontosPlazoComponent } from './components/montos-plazo/montos-plazo.component';
import { DefinirCategoriaUsuarioComponent } from './components/definir-categoria-usuario/definir-categoria-usuario.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  //1-4
    {path: 'almacenadora', component: AlmacenadoraComponent},
    {path: 'aseguradora', component: AseguradorasComponent},
    {path: 'agrupacionCredito', component: AgrupacionCreditosComponent},
    {path: 'lugaresInversion', component: LugaresInversionComponent},
  //5-8
    {path: 'ubicacionGarantia', component: UbicacionGarantiaComponent},
    {path: 'origenFondos', component: OrigenFondosComponent},
    {path: 'formasPago', component: FormasPagoComponent},
    {path: 'destinos', component: DestinosComponent},
  //9-12
    {path: 'categoriasSIB', component: CategoriasSIBComponent},
    {path: 'estatusGarantiaReal', component: EstatusGarantiaRealComponent},
    {path: 'estatusAvaluos', component: EstatusAvaluosComponent},
    {path: 'ingenierosValuadores', component: IngenierosValuadoresComponent},
  //13-16
    {path: 'notarios', component: NotariosComponent},
    {path: 'motivosAjuste', component: MotivosAjustesComponent},
    {path: 'diasInhabilies', component: DiasInhabilesComponent},
    {path: 'cobrosAdicionales', component: CobrosAdicionalesComponent},
  //17-20
    {path: 'institucionesCobroAdicional', component: InstitucionesCobrosAdicionalesComponent},
    {path: 'motivosReserva', component: MotivosReservasComponent},
    {path: 'formasDesembolso', component: FormasDesembolsoComponent},
    {path: 'motivosReferenciaCliente', component: MotivosReferenciasClientesComponent},
  //21-24
    {path: 'relacionTransaccionDeposito', component: RelacionTransaccionDepositosComponent},
    {path: 'mediosContacto', component: MediosContactoComponent},
    {path: 'canalesVenta', component: CanalesVentaComponent},
    {path: 'tiposCanalesDistribucion', component: TiposCanalesDistribucionComponent},
  //25-58
    {path: 'acercamiento', component: AcercamientosComponent},
    {path: 'acesoresPrestamos', component: AsesoresPrestamoComponent},
    {path: 'bancos', component: BancosComponent},
    {path: 'tiposDeducciones', component: TiposDeduccionesComponent},

  //46-49
    {path: 'montosPlazo', component: MontosPlazoComponent},
    {path: 'definirCategoriaUsuario', component: DefinirCategoriaUsuarioComponent},
  //----------------------------------------------------------------------------------------------------
  //----------------------------------------- ENTREGA 2 -------------------------------------------------
    {path: 'tiposPresatmos', component: TiposPrestamosComponent},
    {path: 'archivosLimpieza', component: ArchivosLimpiezaComponent},
    {path: 'frecuenciasAmortizacion', component: FrecuenciasAmortizacionComponent},
    {path: 'garantiasContables', component: GarantiasContablesComponent},
    {path: 'Home', component: HomeComponent},  
    {path: 'parametrizacionNumeroPrestamo', component: ParametrizacionNumeroPrestamoComponent},
    {path: 'pasosCierre', component: PasosCierreComponent},  
    {path: 'tiposTransacciones', component: TiposTransaccionesComponent},
    
  
    {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
