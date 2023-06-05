export const CONTROLLERS_PATH = "src/controllers";
export const CONTEXTS_PATH = "src/contexts";
export const MODELS_PATH = "src/models";
export const COMPONENTS_PATH = "src/components";

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
    componentCreation: {
        success: "Component %var1% criado com sucesso!",
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
    docs: ":books:",
    style: ":art:",
    refactor: ":hammer:",
    test: ":rotating_light:",
    chore: ":wrench:",
    build: ":⚙️:",
    ci: ":construction_worker:",
    perf: ":zap:",
    revert: ":rewind:",
};

export const commitTemplates = {
    initial_commit: {
        name: "initial_commit",
        value: "initial_commit",
        description: "Commit inicial",
        command:
            'git add . && git commit -m ":tada: Initial commit" && git push',
    },
    improve_structure: {
        name: "improve_structure",
        value: "improve_structure",
        description: "Improve structure / format of the code",
        command:
            'git add . && git commit -m ":art: chore(%scope%): Improve structure / format of the code" && git push',
    },
    improve_performance: {
        name: "improve_performance",
        value: "improve_performance",
        description: "Improve performance",
        command:
            'git add . && git commit -m ":zap: feat(%scope%): Improve performance" && git push',
    },
    remove_code_files: {
        name: "remove_code_files",
        value: "remove_code_files",
        description: "Remove code or files",
        command:
            'git add . && git commit -m ":fire: chore(%scope%): Remove code or files" && git push',
    },
    fix_bug: {
        name: "fix_bug",
        value: "fix_bug",
        description: "Fix a bug",
        command:
            'git add . && git commit -m ":bug: fix(%scope%): Fix a bug" && git push',
    },
    critical_hotfix: {
        name: "critical_hotfix",
        value: "critical_hotfix",
        description: "Critical hotfix",
        command:
            'git add . && git commit -m ":ambulance: fix(%scope%): Critical hotfix" && git push',
    },
    introduce_new_features: {
        name: "introduce_new_features",
        value: "introduce_new_features",
        description: "Introduce new features",
        command:
            'git add . && git commit -m ":sparkles: feat(%scope%): Introduce new features" && git push',
    },
    add_update_ui_style_files: {
        name: "add_update_ui_style_files",
        value: "add_update_ui_style_files",
        description: "Add or update the UI and style files",
        command:
            'git add . && git commit -m ":lipstick: chore(%scope%): Add or update the UI and style files" && git push',
    },
    add_update_pass_tests: {
        name: "add_update_pass_tests",
        value: "add_update_pass_tests",
        description: "Add, update, or pass tests",
        command:
            'git add . && git commit -m ":white_check_mark: chore(%scope%): Add, update, or pass tests" && git push',
    },
    fix_security_issues: {
        name: "fix_security_issues",
        value: "fix_security_issues",
        description: "Fix security issues",
        command:
            'git add . && git commit -m ":lock: chore(%scope%): Fix security issues" && git push',
    },
    add_update_secrets: {
        name: "add_update_secrets",
        value: "add_update_secrets",
        description: "Add or update secrets",
        command:
            'git add . && git commit -m ":closed_lock_with_key: chore(%scope%): Add or update secrets" && git push',
    },
    release_version_tags: {
        name: "release_version_tags",
        value: "release_version_tags",
        description: "Release / Version tags",
        command:
            'git add . && git commit -m ":bookmark: chore(%scope%): Release / Version tags" && git push',
    },
    fix_compiler_linter_warnings: {
        name: "fix_compiler_linter_warnings",
        value: "fix_compiler_linter_warnings",
        description: "Fix compiler / linter warnings",
        command:
            'git add . && git commit -m ":rotating_light: chore(%scope%): Fix compiler / linter warnings" && git push',
    },
    downgrade_dependencies: {
        name: "downgrade_dependencies",
        value: "downgrade_dependencies",
        description: "Downgrade dependencies",
        command:
            'git add . && git commit -m ":arrow_down: chore(%scope%): Downgrade dependencies" && git push',
    },
    upgrade_dependencies: {
        name: "upgrade_dependencies",
        value: "upgrade_dependencies",
        description: "Upgrade dependencies",
        command:
            'git add . && git commit -m ":arrow_up: chore(%scope%): Upgrade dependencies" && git push',
    },
    pin_dependencies: {
        name: "pin_dependencies",
        value: "pin_dependencies",
        description: "Pin dependencies to specific versions",
        command:
            'git add . && git commit -m ":pushpin: chore(%scope%): Pin dependencies to specific versions" && git push',
    },
    add_update_analytics_track_code: {
        name: "add_update_analytics_track_code",
        value: "add_update_analytics_track_code",
        description: "Add or update analytics or track code",
        command:
            'git add . && git commit -m ":chart_with_upwards_trend: chore(%scope%): Add or update analytics or track code" && git push',
    },
    refactor_code: {
        name: "refactor_code",
        value: "refactor_code",
        description: "Refactor code",
        command:
            'git add . && git commit -m ":recycle: chore(%scope%): Refactor code" && git push',
    },
    add_dependency: {
        name: "add_dependency",
        value: "add_dependency",
        description: "Add a dependency",
        command:
            'git add . && git commit -m ":heavy_plus_sign: chore(%scope%): Add a dependency" && git push',
    },
    remove_dependency: {
        name: "remove_dependency",
        value: "remove_dependency",
        description: "Remove a dependency",
        command:
            'git add . && git commit -m ":heavy_minus_sign: chore(%scope%): Remove a dependency" && git push',
    },
    add_update_configuration_files: {
        name: "add_update_configuration_files",
        value: "add_update_configuration_files",
        description: "Add or update configuration files",
        command:
            'git add . && git commit -m ":wrench: chore(%scope%): Add or update configuration files" && git push',
    },
    add_update_development_scripts: {
        name: "add_update_development_scripts",
        value: "add_update_development_scripts",
        description: "Add or update development scripts",
        command:
            'git add . && git commit -m ":hammer: chore(%scope%): Add or update development scripts" && git push',
    },
    internationalization_localization: {
        name: "internationalization_localization",
        value: "internationalization_localization",
        description: "Internationalization and localization",
        command:
            'git add . && git commit -m ":globe_with_meridians: chore(%scope%): Internationalization and localization" && git push',
    },
    fix_typos: {
        name: "fix_typos",
        value: "fix_typos",
        description: "Fix typos",
        command:
            'git add . && git commit -m ":pencil2: chore(%scope%): Fix typos" && git push',
    },
    write_bad_code: {
        name: "write_bad_code",
        value: "write_bad_code",
        description: "Write bad code that needs to be improved",
        command:
            'git add . && git commit -m ":poop: chore(%scope%): Write bad code that needs to be improved" && git push',
    },
    revert_changes: {
        name: "revert_changes",
        value: "revert_changes",
        description: "Revert changes",
        command:
            'git add . && git commit -m ":rewind: chore(%scope%): Revert changes" && git push',
    },
    merge_branches: {
        name: "merge_branches",
        value: "merge_branches",
        description: "Merge branches",
        command:
            'git add . && git commit -m ":twisted_rightwards_arrows: chore(%scope%): Merge branches" && git push',
    },
    add_update_compiled_files_packages: {
        name: "add_update_compiled_files_packages",
        value: "add_update_compiled_files_packages",
        description: "Add or update compiled files or packages",
        command:
            'git add . && git commit -m ":package: chore(%scope%): Add or update compiled files or packages" && git push',
    },
    update_code_due_to_external_api_changes: {
        name: "update_code_due_to_external_api_changes",
        value: "update_code_due_to_external_api_changes",
        description: "Update code due to external API changes",
        command:
            'git add . && git commit -m ":alien: chore(%scope%): Update code due to external API changes" && git push',
    },
    move_rename_resources: {
        name: "move_rename_resources",
        value: "move_rename_resources",
        description: "Move or rename resources (e.g.: files, paths, routes)",
        command:
            'git add . && git commit -m ":truck: chore(%scope%): Move or rename resources (e.g.: files, paths, routes)" && git push',
    },
    add_update_license: {
        name: "add_update_license",
        value: "add_update_license",
        description: "Add or update license",
        command:
            'git add . && git commit -m ":page_facing_up: chore(%scope%): Add or update license" && git push',
    },
    introduce_breaking_changes: {
        name: "introduce_breaking_changes",
        value: "introduce_breaking_changes",
        description: "Introduce breaking changes",
        command:
            'git add . && git commit -m ":boom: chore(%scope%): Introduce breaking changes" && git push',
    },
    add_update_assets: {
        name: "add_update_assets",
        value: "add_update_assets",
        description: "Add or update assets",
        command:
            'git add . && git commit -m ":bento: chore(%scope%): Add or update assets" && git push',
    },
    improve_accessibility: {
        name: "improve_accessibility",
        value: "improve_accessibility",
        description: "Improve accessibility",
        command:
            'git add . && git commit -m ":wheelchair: chore(%scope%): Improve accessibility" && git push',
    },
    add_update_comments_in_source_code: {
        name: "add_update_comments_in_source_code",
        value: "add_update_comments_in_source_code",
        description: "Add or update comments in source code",
        command:
            'git add . && git commit -m ":bulb: chore(%scope%): Add or update comments in source code" && git push',
    },
    write_code_drunkenly: {
        name: "write_code_drunkenly",
        value: "write_code_drunkenly",
        description: "Write code drunkenly",
        command:
            'git add . && git commit -m ":beers: chore(%scope%): Write code drunkenly" && git push',
    },
    add_update_database_related_changes: {
        name: "add_update_database_related_changes",
        value: "add_update_database_related_changes",
        description: "Perform database related changes",
        command:
            'git add . && git commit -m ":card_file_box: chore(%scope%): Perform database related changes" && git push',
    },
    add_update_logs: {
        name: "add_update_logs",
        value: "add_update_logs",
        description: "Add or update logs",
        command:
            'git add . && git commit -m ":loud_sound: chore(%scope%): Add or update logs" && git push',
    },
    remove_logs: {
        name: "remove_logs",
        value: "remove_logs",
        description: "Remove logs",
        command:
            'git add . && git commit -m ":mute: chore(%scope%): Remove logs" && git push',
    },
    improve_user_experience_usability: {
        name: "improve_user_experience_usability",
        value: "improve_user_experience_usability",
        description: "Improve user experience / usability",
        command:
            'git add . && git commit -m ":children_crossing: chore(%scope%): Improve user experience / usability" && git push',
    },
    make_architectural_changes: {
        name: "make_architectural_changes",
        value: "make_architectural_changes",
        description: "Make architectural changes",
        command:
            'git add . && git commit -m ":building_construction: chore(%scope%): Make architectural changes" && git push',
    },
    work_on_responsive_design: {
        name: "work_on_responsive_design",
        value: "work_on_responsive_design",
        description: "Work on responsive design",
        command:
            'git add . && git commit -m ":iphone: chore(%scope%): Work on responsive design" && git push',
    },
    mock_things: {
        name: "mock_things",
        value: "mock_things",
        description: "Mock things",
        command:
            'git add . && git commit -m ":clown_face: chore(%scope%): Mock things" && git push',
    },
    add_update_easter_egg: {
        name: "add_update_easter_egg",
        value: "add_update_easter_egg",
        description: "Add or update an easter egg",
        command:
            'git add . && git commit -m ":egg: chore(%scope%): Add or update an easter egg" && git push',
    },
    add_update_gitignore: {
        name: "add_update_gitignore",
        value: "add_update_gitignore",
        description: "Add or update a .gitignore file",
        command:
            'git add . && git commit -m ":see_no_evil: chore(%scope%): Add or update a .gitignore file" && git push',
    },
    add_update_snapshots: {
        name: "add_update_snapshots",
        value: "add_update_snapshots",
        description: "Add or update snapshots",
        command:
            'git add . && git commit -m ":camera_flash: chore(%scope%): Add or update snapshots" && git push',
    },
    perform_experiments: {
        name: "perform_experiments",
        value: "perform_experiments",
        description: "Perform experiments",
        command:
            'git add . && git commit -m ":alembic: chore(%scope%): Perform experiments" && git push',
    },
    improve_seo: {
        name: "improve_seo",
        value: "improve_seo",
        description: "Improve SEO",
        command:
            'git add . && git commit -m ":mag: chore(%scope%): Improve SEO" && git push',
    },
    add_update_types: {
        name: "add_update_types",
        value: "add_update_types",
        description: "Add or update types",
        command:
            'git add . && git commit -m ":label: chore(%scope%): Add or update types" && git push',
    },
    add_update_seed_files: {
        name: "add_update_seed_files",
        value: "add_update_seed_files",
        description: "Add or update seed files",
        command:
            'git add . && git commit -m ":seedling: chore(%scope%): Add or update seed files" && git push',
    },
    add_update_feature_flags: {
        name: "add_update_feature_flags",
        value: "add_update_feature_flags",
        description: "Add, update, or remove feature flags",
        command:
            'git add . && git commit -m ":triangular_flag_on_post: chore(%scope%): Add, update, or remove feature flags" && git push',
    },
    catch_errors: {
        name: "catch_errors",
        value: "catch_errors",
        description: "Catch errors",
        command:
            'git add . && git commit -m ":goal_net: chore(%scope%): Catch errors" && git push',
    },
    add_update_animations_transitions: {
        name: "add_update_animations_transitions",
        value: "add_update_animations_transitions",
        description: "Add or update animations and transitions",
        command:
            'git add . && git commit -m ":dizzy: chore(%scope%): Add or update animations and transitions" && git push',
    },
    deprecate_code: {
        name: "deprecate_code",
        value: "deprecate_code",
        description: "Deprecate code that needs to be cleaned up",
        command:
            'git add . && git commit -m ":wastebasket: chore(%scope%): Deprecate code that needs to be cleaned up" && git push',
    },
    work_on_authorization_roles_permissions: {
        name: "work_on_authorization_roles_permissions",
        value: "work_on_authorization_roles_permissions",
        description:
            "Work on code related to authorization, roles and permissions",
        command:
            'git add . && git commit -m ":passport_control: chore(%scope%): Work on code related to authorization, roles and permissions" && git push',
    },
    remove_dead_code: {
        name: "remove_dead_code",
        value: "remove_dead_code",
        description: "Remove dead code",
        command:
            'git add . && git commit -m ":coffin: chore(%scope%): Remove dead code" && git push',
    },
    add_update_business_logic: {
        name: "add_update_business_logic",
        value: "add_update_business_logic",
        description: "Add or update business logic",
        command:
            'git add . && git commit -m ":necktie: chore(%scope%): Add or update business logic" && git push',
    },
    add_update_healthcheck: {
        name: "add_update_healthcheck",
        value: "add_update_healthcheck",
        description: "Add or update healthcheck",
        command:
            'git add . && git commit -m ":stethoscope: chore(%scope%): Add or update healthcheck" && git push',
    },
    infrastructure_related_changes: {
        name: "infrastructure_related_changes",
        value: "infrastructure_related_changes",
        description: "Infrastructure related changes",
        command:
            'git add . && git commit -m ":bricks: chore(%scope%): Infrastructure related changes" && git push',
    },
    improve_developer_experience: {
        name: "improve_developer_experience",
        value: "improve_developer_experience",
        description: "Improve developer experience",
        command:
            'git add . && git commit -m ":technologist: chore(%scope%): Improve developer experience" && git push',
    },
    add_sponsorships_money_related_infrastructure: {
        name: "add_sponsorships_money_related_infrastructure",
        value: "add_sponsorships_money_related_infrastructure",
        description: "Add sponsorships or money related infrastructure",
        command:
            'git add . && git commit -m ":money_with_wings: chore(%scope%): Add sponsorships or money related infrastructure" && git push',
    },
    add_update_multithreading_concurrency_code: {
        name: "add_update_multithreading_concurrency_code",
        value: "add_update_multithreading_concurrency_code",
        description:
            "Add or update code related to multithreading or concurrency",
        command:
            'git add . && git commit -m ":thread: chore(%scope%): Add or update code related to multithreading or concurrency" && git push',
    },
    add_update_validation_code: {
        name: "add_update_validation_code",
        value: "add_update_validation_code",
        description: "Add or update code related to validation",
        command:
            'git add . && git commit -m ":safety_vest: chore(%scope%): Add or update code related to validation" && git push',
    },
};
