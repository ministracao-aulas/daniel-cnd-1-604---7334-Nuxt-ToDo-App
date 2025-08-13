<template>
    <div class="w-full md:w-10/12 md:mx-auto h-screen">
        <h2 class="text-3xl text-gray-200 font-bold pl-4">Todo App</h2>

        <div class="w-full flex flex-col gap-3 px-2 pt-4">
            <div class="w-full">
                <UButtonGroup class="w-full">
                    <UInput
                        v-model="form.content"
                        type="text"
                        size="xl"
                        placeholder="Add your new TODO"
                        @keydown.enter.prevent="addItem"
                    />
                    <UButton
                        @click.prevent.stop="addItem"
                        icon="i-lucide-plus"
                        size="md"
                        color="success"
                        variant="solid"
                        type="button"
                        class="px-3 cursor-pointer flex justify-center content-center text-3xl font-bold text-center"
                    />
                </UButtonGroup>
            </div>

            <!-- To Do -->
            <div class="w-full flex flex-col gap-3 pt-3 mb-8">
                <template v-for="(todoItem, itemIndex) in doneFalseOnly" key="itemIndex">
                    <div class="bg-gray-600 hover:bg-gray-600/40 h-12 w-full rounded-md grid grid-cols-5 gap-2">
                        <div class="w-full col-span-4 ps-2 pe-3 overflow-hidden text-nowrap flex content-center">
                            <p class="text-gray-200 text-xl pt-2">{{ todoItem.content }}</p>
                        </div>

                        <div class="w-full flex gap-2 justify-between">
                            <UButton
                                @click.prevent.stop="deleteItem(todoItem)"
                                icon="i-lucide-trash"
                                size="md"
                                color="error"
                                variant="solid"
                                type="button"
                                class="px-3 cursor-pointer flex justify-center content-center text-3xl font-bold text-center"
                            />

                            <UButton
                                @click.prevent.stop="markAsDone(todoItem)"
                                icon="i-lucide-check"
                                size="md"
                                color="success"
                                variant="solid"
                                type="button"
                                class="px-3 cursor-pointer flex justify-center content-center text-3xl font-bold text-center"
                            />
                        </div>
                    </div>
                </template>
            </div>

            <!-- Done -->
            <div class="w-full flex flex-col gap-3 pt-3 mb-8 opacity-20 hover:opacity-80">
                <template v-for="(todoItem, itemIndex) in doneTrueOnly" key="itemIndex">
                    <div class="bg-gray-600 hover:bg-gray-600/40 h-12 w-full rounded-md grid grid-cols-5 gap-2">
                        <div class="w-full col-span-4 ps-2 pe-3 overflow-hidden text-nowrap flex content-center">
                            <p class="text-gray-200 text-xl pt-2 italic line-through">
                                {{ todoItem.content }}
                            </p>
                        </div>
                        <div class="w-full flex gap-2 justify-between">
                            <UButton
                                @click.prevent.stop="markAsUndone(todoItem)"
                                icon="i-lucide-arrow-up"
                                size="md"
                                color="info"
                                variant="solid"
                                type="button"
                                class="px-3 cursor-pointer flex justify-center content-center text-3xl font-bold text-center"
                            />

                            <UButton
                                @click.prevent.stop="deleteItem(todoItem)"
                                icon="i-lucide-trash"
                                size="md"
                                color="error"
                                variant="solid"
                                type="button"
                                class="px-3 cursor-pointer flex justify-center content-center text-3xl font-bold text-center"
                            />
                        </div>
                    </div>
                </template>
            </div>

            <div class="w-full flex flex-col gap-3 pt-3 mb-8">
                <div class="div flex frex-row gap-3 justify-between content-center">
                    <h4 class="text-2xl text-gray-200 font-bold">
                        You have {{ doneFalseOnly.length || 0 }} pending tasks
                    </h4>
                    <UButton
                        @click.prevent.stop="showDeleteAllOptions = !showDeleteAllOptions"
                        type="button"
                        size="xs"
                        class="cursor-pointer flex justify-center content-center text-3xl font-bold text-center"
                    >
                        Clear all
                    </UButton>
                </div>

                <div
                    v-show="showDeleteAllOptions"
                    class="w-full flex gap-3 justify-between mb-8 border border-gray-500 p-1 rounded-md"
                >
                    <UButton
                        icon="i-lucide-trash"
                        size="xs"
                        color="error"
                        variant="solid"
                        type="button"
                        class="px-3 cursor-pointer text-xl"
                    >
                        Done only
                    </UButton>
                    <UButton
                        icon="i-lucide-trash"
                        size="xs"
                        color="error"
                        variant="solid"
                        type="button"
                        class="px-3 cursor-pointer text-xl"
                    >
                        Undone only
                    </UButton>
                    <UButton
                        icon="i-lucide-trash"
                        size="xs"
                        color="error"
                        variant="solid"
                        type="button"
                        class="px-3 cursor-pointer text-xl"
                    >
                        All
                    </UButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import toast from '~/libs/toast';

onMounted(() => {
    // toast.success('Sucesso');
    // toast.info('Info');
    // toast.toast('ambxdbvfh');
    // toast.error('Erro');
});

type TodoItem = {
    id: string;
    content: string;
    done?: boolean | null;
};

const todoList = ref<TodoItem[]>([
    {
        id: 'abc1',
        content: 'Item 1',
        done: true,
    },
    {
        id: 'abc2',
        content: 'Item 2',
        done: false,
    },
    {
        id: 'abc3',
        content: 'Item 3',
        done: false,
    },
    {
        id: 'abc4',
        content: 'Item 4',
        done: false,
    },
    {
        id: 'abc5',
        content: 'Item 5',
        done: false,
    },
    {
        id: 'abc6',
        content: 'Item 6',
        done: true,
    },
    {
        id: 'abc7',
        content: 'Item 7',
        done: false,
    },
    {
        id: 'abc8',
        content: 'Item 8',
        done: false,
    },
    {
        id: 'abc9',
        content: 'Item 9',
        done: true,
    },
    {
        id: 'abc10',
        content: 'Item 10',
        done: false,
    },
    {
        id: 'abc11',
        content: 'Item 11',
        done: true,
    },
    {
        id: 'abc12',
        content: 'Item 12',
        done: true,
    },
]);

const showDeleteAllOptions = ref(false);

const form = reactive({
    done: false,
    content: '',
});

const doneFalseOnly = computed(() => todoList.value.filter((i: TodoItem) => !i.done));
const doneTrueOnly = computed(() => todoList.value.filter((i: TodoItem) => i.done));

const markAsDone = (item: TodoItem) => {
    item.done = true;
    toast.success('Done!');
};

const markAsUndone = (item: TodoItem) => {
    item.done = false;
    toast.success('Undone!');
};

const deleteItem = (item: TodoItem) => {
    todoList.value = todoList.value.filter((i: TodoItem) => i.id !== item.id);
    toast.success('Deleted successfully!');
};

const resetForm = () => {
    form.done = false;
    form.content = '';
};

const generateId = () => Math.random.toString().slice(2, 5);

const addItem = () => {
    if (typeof form.content !== 'string' || !form.content.trim().length) {
        toast.error('Please, put content to add!');
        return;
    }

    let item: TodoItem = {
        id: generateId(),
        done: Boolean(form.done || false),
        content: form.content.trim(),
    };

    todoList.value.unshift(item);
    resetForm();
    toast.success('Added successfully!');
};
</script>
