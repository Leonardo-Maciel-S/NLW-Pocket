import { X } from 'lucide-react'

import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from './ui/dialog'

import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import {
    RadioGroup,
    RadioGroupIndicator,
    RadioGroupItem,
} from './ui/radio-group'

export function CreateGoal() {
    return (
        <DialogContent>
            <div className="flex flex-col gap-6 h-full">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <DialogTitle>Cadastrar meta</DialogTitle>
                        <DialogClose>
                            <X className="size-5 text-zinc-600" />
                        </DialogClose>
                    </div>

                    <DialogDescription>
                        Adicione atividades que te fazem bem e que você quer
                        continuar praticando toda semana.
                    </DialogDescription>
                </div>

                <form
                    action=""
                    className="flex flex-col justify-between flex-1"
                >
                    <div className="">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="title">Qual a atividade?</Label>
                                <Input
                                    id="title"
                                    autoFocus
                                    placeholder="Praticar exercícios, meditar, etc."
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="">
                                    Quantas vezes na semana?
                                </Label>
                                <RadioGroup id="">
                                    <RadioGroupItem
                                        value="1"
                                        className="flex justify-between"
                                    >
                                        <RadioGroupIndicator />
                                        <span className="text-zinc-300 text-sm font-medium leading-none">
                                            1x na semana
                                        </span>
                                        <span className="text-lg leading-none">
                                            🥱
                                        </span>
                                    </RadioGroupItem>

                                    <RadioGroupItem
                                        value="2"
                                        className="flex justify-between"
                                    >
                                        <RadioGroupIndicator />
                                        <span className="text-zinc-300 text-sm font-medium leading-none">
                                            2x na semana
                                        </span>
                                        <span className="text-lg leading-none">
                                            🙂
                                        </span>
                                    </RadioGroupItem>

                                    <RadioGroupItem
                                        value="3"
                                        className="flex justify-between"
                                    >
                                        <RadioGroupIndicator />
                                        <span className="text-zinc-300 text-sm font-medium leading-none">
                                            3x na semana
                                        </span>
                                        <span className="text-lg leading-none">
                                            😎
                                        </span>
                                    </RadioGroupItem>

                                    <RadioGroupItem
                                        value="4"
                                        className="flex justify-between"
                                    >
                                        <RadioGroupIndicator />
                                        <span className="text-zinc-300 text-sm font-medium leading-none">
                                            4x na semana
                                        </span>
                                        <span className="text-lg leading-none">
                                            😜
                                        </span>
                                    </RadioGroupItem>

                                    <RadioGroupItem
                                        value="5"
                                        className="flex justify-between"
                                    >
                                        <RadioGroupIndicator />
                                        <span className="text-zinc-300 text-sm font-medium leading-none">
                                            5x na semana
                                        </span>
                                        <span className="text-lg leading-none">
                                            🤨
                                        </span>
                                    </RadioGroupItem>

                                    <RadioGroupItem
                                        value="6"
                                        className="flex justify-between"
                                    >
                                        <RadioGroupIndicator />
                                        <span className="text-zinc-300 text-sm font-medium leading-none">
                                            6x na semana
                                        </span>
                                        <span className="text-lg leading-none">
                                            🤯
                                        </span>
                                    </RadioGroupItem>

                                    <RadioGroupItem
                                        value="7"
                                        className="flex justify-between"
                                    >
                                        <RadioGroupIndicator />
                                        <span className="text-zinc-300 text-sm font-medium leading-none">
                                            Todos os dias da semana
                                        </span>
                                        <span className="text-lg leading-none">
                                            🔥
                                        </span>
                                    </RadioGroupItem>
                                </RadioGroup>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <DialogClose asChild>
                            <Button
                                type="button"
                                variant="secondary"
                                className="flex-1"
                            >
                                Fechar
                            </Button>
                        </DialogClose>

                        <Button className="flex-1">Salvar</Button>
                    </div>
                </form>
            </div>
        </DialogContent>
    )
}
