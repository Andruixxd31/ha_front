import { BrowserRouter as Router, Link } from 'react-router-dom';

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "./lib/utils"
import './tailwind.css';
import {
  ChevronLeft,
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Upload,
  Users2,
} from "lucide-react"
import { Badge } from "./components/ui/badge"

import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./components/ui/breadcrumb"
import { Button } from "./components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table"
import { Textarea } from "./components/ui/textarea"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "./components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "./components/ui/tooltip"

function App() {
  const [date, setDate] = React.useState<Date>()
  return (
    <Router>
      <TooltipProvider>

        <div className="flex min-h-screen w-full flex-col bg-muted/40" >
          <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
              <Link
                to="#"
                className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              >
                <img
                  src='/logo.png'
                />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Home className="h-5 w-5" />
                    <span className="sr-only">Dashboard</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Dashboard</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Users2 className="h-5 w-5" />
                    <span className="sr-only">Customers</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Customers</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <LineChart className="h-5 w-5" />
                    <span className="sr-only">Analytics</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Analytics</TooltipContent>
              </Tooltip>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Settings</TooltipContent>
              </Tooltip>
            </nav>
          </aside>
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon" variant="outline" className="sm:hidden">
                    <PanelLeft className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                  <nav className="grid gap-6 text-lg font-medium">
                    <Link
                      to="#"
                      className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                    >
                      <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                      <span className="sr-only">Acme Inc</span>
                    </Link>
                    <Link
                      to="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <Home className="h-5 w-5" />
                      Dashboard
                    </Link>
                    <Link
                      to="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Orders
                    </Link>
                    <Link
                      to="#"
                      className="flex items-center gap-4 px-2.5 text-foreground"
                    >
                      <Package className="h-5 w-5" />
                      Products
                    </Link>
                    <Link
                      to="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <Users2 className="h-5 w-5" />
                      Customers
                    </Link>
                    <Link
                      to="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <LineChart className="h-5 w-5" />
                      Settings
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
              <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="#">Tablero</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="#">Zona</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Cosechas</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="relative ml-auto flex-1 md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="overflow-hidden rounded-full"
                  >
                    <img
                      src="../public/avatar.svg"
                      width={36}
                      height={36}
                      alt="Avatar"
                      className="overflow-hidden rounded-full"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </header>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
              <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" className="h-7 w-7">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                  </Button>
                  <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                    Tablero de Informacion de Cosechas
                  </h1>
                  <div className="hidden items-center gap-2 md:ml-auto md:flex">
                    <Button variant="outline" size="sm">
                      Salir
                    </Button>
                    <Button size="sm">Guardar Datos</Button>
                  </div>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">

                  <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                    <Card x-chunk="dashboard-07-chunk-0">
                      <CardHeader>
                        <CardTitle>Detalles de Cosecha</CardTitle>
                        <CardDescription>
                          Ingresa nota sobre las condiciones sobre tus cosechas
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-6">
                          <div className="grid gap-3">
                            <Label htmlFor="name">Nombre</Label>
                            <Input
                              id="name"
                              type="text"
                              className="w-full"
                              defaultValue=""
                            />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="description">Descripcion</Label>
                            <Textarea
                              id="description"
                              defaultValue=""
                              className="min-h-32"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-07-chunk-1">
                      <CardHeader>
                        <CardTitle>Costo Cosechas</CardTitle>
                        <CardDescription>
                          Agrega el costo de los cosechas para dar un seguimiento
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[100px]">Cosecha</TableHead>
                              <TableHead>Cantidad</TableHead>
                              <TableHead>Costo por kilo</TableHead>
                              <TableHead className="w-[100px]"></TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-semibold">
                                Maiz
                              </TableCell>
                              <TableCell>
                                <Label htmlFor="stock-1" className="sr-only">
                                  Stock
                                </Label>
                                <Input
                                  id="stock-1"
                                  type="number"
                                  defaultValue="100"
                                />
                              </TableCell>
                              <TableCell>
                                <Label htmlFor="price-1" className="sr-only">
                                  Price
                                </Label>
                                <Input
                                  id="price-1"
                                  type="number"
                                  defaultValue="99.99"
                                />
                              </TableCell>
                              <TableCell>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-semibold">
                                Calabaza
                              </TableCell>
                              <TableCell>
                                <Label htmlFor="stock-2" className="sr-only">
                                  Stock
                                </Label>
                                <Input
                                  id="stock-2"
                                  type="number"
                                  defaultValue="143"
                                />
                              </TableCell>
                              <TableCell>
                                <Label htmlFor="price-2" className="sr-only">
                                  Price
                                </Label>
                                <Input
                                  id="price-2"
                                  type="number"
                                  defaultValue="99.99"
                                />
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-semibold">
                                Frijol
                              </TableCell>
                              <TableCell>
                                <Label htmlFor="stock-3" className="sr-only">
                                  Stock
                                </Label>
                                <Input
                                  id="stock-3"
                                  type="number"
                                  defaultValue="32"
                                />
                              </TableCell>
                              <TableCell>
                                <Label htmlFor="price-3" className="sr-only">
                                  Stock
                                </Label>
                                <Input
                                  id="price-3"
                                  type="number"
                                  defaultValue="99.99"
                                />
                              </TableCell>
                              <TableCell>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </CardContent>
                      <CardFooter className="justify-center border-t p-4">
                        <Button size="sm" variant="ghost" className="gap-1">
                          <PlusCircle className="h-3.5 w-3.5" />
                          Agregar Otra
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                  <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                    <Card x-chunk="dashboard-07-chunk-3">
                      <CardHeader>
                        <CardTitle>Estado de cosechas</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-6">
                          <div className="grid gap-3">
                            <Label htmlFor="status">Estado</Label>
                            <Select>
                              <SelectTrigger id="status" aria-label="Select status">
                                <SelectValue placeholder="Selecciona Estado" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="draft">Buena condicion</SelectItem>
                                <SelectItem value="published">Regular</SelectItem>
                                <SelectItem value="archived">Mala</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card
                      className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
                    >
                      <CardHeader>
                        <CardTitle>Nivel de sequia</CardTitle>
                        <CardDescription>
                          Consulta el nivel de sequia de la zona
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-2">
                          <img
                            alt="Product image"
                            className="aspect-square w-full rounded-md object-cover"
                            height="300"
                            src="/map.jpeg"
                            width="300"
                          />
                        </div>
                      </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-07-chunk-5">
                      <CardHeader>
                        <CardTitle>$450,000 Perdidas Estimadas</CardTitle>
                        <CardDescription>
                          Debido a una sequia moderado sustendada y poca disponibilidad de agua en acuiferos
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 md:hidden">
                  <Button variant="outline" size="sm">
                    Discard
                  </Button>
                  <Button size="sm">Save Product</Button>
                </div>
              </div>
            </main>
          </div>
        </div >
      </TooltipProvider>
    </Router>
  )
}

export default App
