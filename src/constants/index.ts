export const CONTROLLERS_PATH = "src/controllers";
export const CONTEXTS_PATH = "src/contexts";
export const MODELS_PATH = "src/models";

export const messages = {
    controllerCreation: {
        success: "Controlador %var1% criado com sucesso!",
        fail: "Erro ao criar o arquivo do controller",
    },
    contextCreation: {
        success: "Contexto %var1% criado com sucesso!",
        fail: "Erro ao criar o arquivo do contexto",
    },
    modelCreation: {
        success: "Modelo %var1% criado com sucesso!",
        fail: "Erro ao criar o arquivo do modelo",
    },
    packageUpdating: {
        success: "Package.json atualizado com sucesso: %var1% -> %var2%",
        fail: "Erro ao tentar atualizar a versão do package.json",
    },
};

export const commitTypes = {
    feat: {
        name: "feat",
        value: "feat",
        description: "Para uma nova funcionalidade adicionada.",
    },
    refactor: {
        name: "refactor",
        value: "refactor",
        description:
            "Para alterações que não adicionam novas funcionalidades ou corrigem bugs.",
    },
    fix: {
        name: "fix",
        value: "fix",
        description: "Para uma correção de bug.",
    },
    docs: {
        name: "docs",
        value: "docs",
        description: "Para alterações na documentação.",
    },
    style: {
        name: "style",
        value: "style",
        description:
            "Para alterações de estilo no código (ex: formatação, ponto e vírgula ausente, etc.).",
    },
    test: {
        name: "test",
        value: "test",
        description: "Para adicionar ou modificar testes.",
    },
    chore: {
        name: "chore",
        value: "chore",
        description:
            "Para alterações relacionadas a tarefas de construção ou ferramentas auxiliares.",
    },
    build: {
        name: "build",
        value: "build",
        description:
            "Para alterações que afetam o sistema de build ou dependências externas.",
    },
    ci: {
        name: "ci",
        value: "ci",
        description:
            "Para alterações nos arquivos e scripts de configuração do CI (Integração Contínua).",
    },
    perf: {
        name: "perf",
        value: "perf",
        description: "Para melhorias de desempenho.",
    },
    revert: {
        name: "revert",
        value: "revert",
        description: "Para reverter uma alteração anterior.",
    },
};

export const commitIcons: Record<keyof typeof commitTypes, string> = {
    feat: ":sparkles:",
    fix: ":bug:",
    docs: ":memo:",
    style: ":lipstick:",
    refactor: ":recycle:",
    test: ":white_check_mark:",
    chore: ":wrench:",
    build: ":hammer:",
    ci: ":gear:",
    perf: ":rocket:",
    revert: ":rewind:",
};
