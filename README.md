# Hesto CLI

![Hesto CLI Logo](logo.png)

A Hesto CLI foi inspirada em Hefesto, o artesão divino da mitologia grega. Hefesto era conhecido por sua habilidade em forjar armas poderosas e belas obras de arte. Da mesma forma, a Hesto CLI visa fornecer uma ferramenta poderosa e útil para desenvolvedores e criadores.

## Visão Geral

A Hesto CLI permite que você agilize suas tarefas de desenvolvimento e automatize processos repetitivos. Com uma série de comandos e recursos, você pode criar projetos, gerenciar dependências, executar tarefas de build e muito mais, tudo com facilidade e eficiência.

Assim como Hefesto moldava o metal com maestria, a Hesto CLI é projetada para ajudá-lo a moldar seu código com precisão e elegância. Aproveite o poder da Hesto CLI para impulsionar sua produtividade e alcançar resultados impressionantes.

## Instalação

Para instalar a Hesto CLI, você precisa ter o Node.js e o npm (gerenciador de pacotes do Node.js) instalados em seu sistema. Em seguida, execute o seguinte comando no terminal:

```bash
npm install -g hesto-cli
ou
yarn add global hesto-cli
```

Após a instalação, você pode usar o comando `hesto` para acessar todas as funcionalidades da Hesto CLI.

{
  improve_structure: {
    name: 'improve_structure',
    value: 'improve_structure',
    description: ':art: Improve structure / format of the code',
    command: 'git add . && git commit -m ":art: chore: Improve structure / format of the code" && git push',
  },
  improve_performance: {
    name: 'improve_performance',
    value: 'improve_performance',
    description: ':zap: Improve performance',
    command: 'git add . && git commit -m ":zap: feat: Improve performance" && git push',
  },
  remove_code_files: {
    name: 'remove_code_files',
    value: 'remove_code_files',
    description: ':fire: Remove code or files',
    command: 'git add . && git commit -m ":fire: chore: Remove code or files" && git push',
  },
  fix_bug: {
    name: 'fix_bug',
    value: 'fix_bug',
    description: ':bug: Fix a bug',
    command: 'git add . && git commit -m ":bug: fix: Fix a bug" && git push',
  },
  critical_hotfix: {
    name: 'critical_hotfix',
    value: 'critical_hotfix',
    description: ':ambulance: Critical hotfix',
    command: 'git add . && git commit -m ":ambulance: fix: Critical hotfix" && git push',
  },
  introduce_new_features: {
    name: 'introduce_new_features',
    value: 'introduce_new_features',
    description: ':sparkles: Introduce new features',
    command: 'git add . && git commit -m ":sparkles: feat: Introduce new features" && git push',
  },
  add_update_ui_style_files: {
    name: 'add_update_ui_style_files',
    value: 'add_update_ui_style_files',
    description: ':lipstick: Add or update the UI and style files',
    command: 'git add . && git commit -m ":lipstick: chore: Add or update the UI and style files" && git push',
  },
  add_update_pass_tests: {
    name: 'add_update_pass_tests',
    value: 'add_update_pass_tests',
    description: ':white_check_mark: Add, update, or pass tests',
    command: 'git add . && git commit -m ":white_check_mark: chore: Add, update, or pass tests" && git push',
  },
  fix_security_issues: {
    name: 'fix_security_issues',
    value: 'fix_security_issues',
    description: ':lock: Fix security issues',
    command: 'git add . && git commit -m ":lock: chore: Fix security issues" && git push',
  },
  add_update_secrets: {
    name: 'add_update_secrets',
    value: 'add_update_secrets',
    description: ':closed_lock_with_key: Add or update secrets',
    command: 'git add . && git commit -m ":closed_lock_with_key: chore: Add or update secrets" && git push',
  },
  release_version_tags: {
    name: 'release_version_tags',
    value: 'release_version_tags',
    description: ':bookmark: Release / Version tags',
    command: 'git add . && git commit -m ":bookmark: chore: Release / Version tags" && git push',
  },
  fix_compiler_linter_warnings: {
    name: 'fix_compiler_linter_warnings',
    value: 'fix_compiler_linter_warnings',
    description: ':rotating_light: Fix compiler / linter warnings',
    command: 'git add . && git commit -m ":rotating_light: chore: Fix compiler / linter warnings" && git push',
  },
  downgrade_dependencies: {
    name: 'downgrade_dependencies',
    value: 'downgrade_dependencies',
    description: ':arrow_down: Downgrade dependencies',
    command: 'git add . && git commit -m ":arrow_down: chore: Downgrade dependencies" && git push',
  },
  upgrade_dependencies: {
    name: 'upgrade_dependencies',
    value: 'upgrade_dependencies',
    description: ':arrow_up: Upgrade dependencies',
    command: 'git add . && git commit -m ":arrow_up: chore: Upgrade dependencies" && git push',
  },
  pin_dependencies: {
    name: 'pin_dependencies',
    value: 'pin_dependencies',
    description: ':pushpin: Pin dependencies to specific versions',
    command: 'git add . && git commit -m ":pushpin: chore: Pin dependencies to specific versions" && git push',
  },
  add_update_analytics_track_code: {
    name: 'add_update_analytics_track_code',
    value: 'add_update_analytics_track_code',
    description: ':chart_with_upwards_trend: Add or update analytics or track code',
    command: 'git add . && git commit -m ":chart_with_upwards_trend: chore: Add or update analytics or track code" && git push',
  },
  refactor_code: {
    name: 'refactor_code',
    value: 'refactor_code',
    description: ':recycle: Refactor code',
    command: 'git add . && git commit -m ":recycle: chore: Refactor code" && git push',
  },
  add_dependency: {
    name: 'add_dependency',
    value: 'add_dependency',
    description: ':heavy_plus_sign: Add a dependency',
    command: 'git add . && git commit -m ":heavy_plus_sign: chore: Add a dependency" && git push',
  },
  remove_dependency: {
    name: 'remove_dependency',
    value: 'remove_dependency',
    description: ':heavy_minus_sign: Remove a dependency',
    command: 'git add . && git commit -m ":heavy_minus_sign: chore: Remove a dependency" && git push',
  },
  add_update_configuration_files: {
    name: 'add_update_configuration_files',
    value: 'add_update_configuration_files',
    description: ':wrench: Add or update configuration files',
    command: 'git add . && git commit -m ":wrench: chore: Add or update configuration files" && git push',
  },
  add_update_development_scripts: {
    name: 'add_update_development_scripts',
    value: 'add_update_development_scripts',
    description: ':hammer: Add or update development scripts',
    command: 'git add . && git commit -m ":hammer: chore: Add or update development scripts" && git push',
  },
  internationalization_localization: {
    name: 'internationalization_localization',
    value: 'internationalization_localization',
    description: ':globe_with_meridians: Internationalization and localization',
    command: 'git add . && git commit -m ":globe_with_meridians: chore: Internationalization and localization" && git push',
  },
  fix_typos: {
    name: 'fix_typos',
    value: 'fix_typos',
    description: ':pencil2: Fix typos',
    command: 'git add . && git commit -m ":pencil2: chore: Fix typos" && git push',
  },
  write_bad_code: {
    name: 'write_bad_code',
    value: 'write_bad_code',
    description: ':poop: Write bad code that needs to be improved',
    command: 'git add . && git commit -m ":poop: chore: Write bad code that needs to be improved" && git push',
  },
  revert_changes: {
    name: 'revert_changes',
    value: 'revert_changes',
    description: ':rewind: Revert changes',
    command: 'git add . && git commit -m ":rewind: chore: Revert changes" && git push',
  },
  merge_branches: {
    name: 'merge_branches',
    value: 'merge_branches',
    description: ':twisted_rightwards_arrows: Merge branches',
    command: 'git add . && git commit -m ":twisted_rightwards_arrows: chore: Merge branches" && git push',
  },
  add_update_compiled_files_packages: {
    name: 'add_update_compiled_files_packages',
    value: 'add_update_compiled_files_packages',
    description: ':package: Add or update compiled files or packages',
    command: 'git add . && git commit -m ":package: chore: Add or update compiled files or packages" && git push',
  },
  update_code_due_to_external_api_changes: {
    name: 'update_code_due_to_external_api_changes',
    value: 'update_code_due_to_external_api_changes',
    description: ':alien: Update code due to external API changes',
    command: 'git add . && git commit -m ":alien: chore: Update code due to external API changes" && git push',
  },
  move_rename_resources: {
    name: 'move_rename_resources',
    value: 'move_rename_resources',
    description: ':truck: Move or rename resources (e.g.: files, paths, routes)',
    command: 'git add . && git commit -m ":truck: chore: Move or rename resources (e.g.: files, paths, routes)" && git push',
  },
  add_update_license: {
    name: 'add_update_license',
    value: 'add_update_license',
    description: ':page_facing_up: Add or update license',
    command: 'git add . && git commit -m ":page_facing_up: chore: Add or update license" && git push',
  },
  introduce_breaking_changes: {
    name: 'introduce_breaking_changes',
    value: 'introduce_breaking_changes',
    description: ':boom: Introduce breaking changes',
    command: 'git add . && git commit -m ":boom: chore: Introduce breaking changes" && git push',
  },
  add_update_assets: {
    name: 'add_update_assets',
    value: 'add_update_assets',
    description: ':bento: Add or update assets',
    command: 'git add . && git commit -m ":bento: chore: Add or update assets" && git push',
  },
  improve_accessibility: {
    name: 'improve_accessibility',
    value: 'improve_accessibility',
    description: ':wheelchair: Improve accessibility',
    command: 'git add . && git commit -m ":wheelchair: chore: Improve accessibility" && git push',
  },
  add_update_comments_in_source_code: {
    name: 'add_update_comments_in_source_code',
    value: 'add_update_comments_in_source_code',
    description: ':bulb: Add or update comments in source code',
    command: 'git add . && git commit -m ":bulb: chore: Add or update comments in source code" && git push',
  },
  write_code_drunkenly: {
    name: 'write_code_drunkenly',
    value: 'write_code_drunkenly',
    description: ':beers: Write code drunkenly',
    command: 'git add . && git commit -m ":beers: chore: Write code drunkenly" && git push',
  },
  add_update_database_related_changes: {
    name: 'add_update_database_related_changes',
    value: 'add_update_database_related_changes',
    description: ':card_file_box: Perform database related changes',
    command: 'git add . && git commit -m ":card_file_box: chore: Perform database related changes" && git push',
  },
  add_update_logs: {
    name: 'add_update_logs',
    value: 'add_update_logs',
    description: ':loud_sound: Add or update logs',
    command: 'git add . && git commit -m ":loud_sound: chore: Add or update logs" && git push',
  },
  remove_logs: {
    name: 'remove_logs',
    value: 'remove_logs',
    description: ':mute: Remove logs',
    command: 'git add . && git commit -m ":mute: chore: Remove logs" && git push',
  },
  improve_user_experience_usability: {
    name: 'improve_user_experience_usability',
    value: 'improve_user_experience_usability',
    description: ':children_crossing: Improve user experience / usability',
    command: 'git add . && git commit -m ":children_crossing: chore: Improve user experience / usability" && git push',
  },
  make_architectural_changes: {
    name: 'make_architectural_changes',
    value: 'make_architectural_changes',
    description: ':building_construction: Make architectural changes',
    command: 'git add . && git commit -m ":building_construction: chore: Make architectural changes" && git push',
  },
  work_on_responsive_design: {
    name: 'work_on_responsive_design',
    value: 'work_on_responsive_design',
    description: ':iphone: Work on responsive design',
    command: 'git add . && git commit -m ":iphone: chore: Work on responsive design" && git push',
  },
  mock_things: {
    name: 'mock_things',
    value: 'mock_things',
    description: ':clown_face: Mock things',
    command: 'git add . && git commit -m ":clown_face: chore: Mock things" && git push',
  },
  add_update_easter_egg: {
    name: 'add_update_easter_egg',
    value: 'add_update_easter_egg',
    description: ':egg: Add or update an easter egg',
    command: 'git add . && git commit -m ":egg: chore: Add or update an easter egg" && git push',
  },
  add_update_gitignore: {
    name: 'add_update_gitignore',
    value: 'add_update_gitignore',
    description: ':see_no_evil: Add or update a .gitignore file',
    command: 'git add . && git commit -m ":see_no_evil: chore: Add or update a .gitignore file" && git push',
  },
  add_update_snapshots: {
    name: 'add_update_snapshots',
    value: 'add_update_snapshots',
    description: ':camera_flash: Add or update snapshots',
    command: 'git add . && git commit -m ":camera_flash: chore: Add or update snapshots" && git push',
  },
  perform_experiments: {
    name: 'perform_experiments',
    value: 'perform_experiments',
    description: ':alembic: Perform experiments',
    command: 'git add . && git commit -m ":alembic: chore: Perform experiments" && git push',
  },
  improve_seo: {
    name: 'improve_seo',
    value: 'improve_seo',
    description: ':mag: Improve SEO',
    command: 'git add . && git commit -m ":mag: chore: Improve SEO" && git push',
  },
  add_update_types: {
    name: 'add_update_types',
    value: 'add_update_types',
    description: ':label: Add or update types',
    command: 'git add . && git commit -m ":label: chore: Add or update types" && git push',
  },
  add_update_seed_files: {
    name: 'add_update_seed_files',
    value: 'add_update_seed_files',
    description: ':seedling: Add or update seed files',
    command: 'git add . && git commit -m ":seedling: chore: Add or update seed files" && git push',
  },
  add_update_feature_flags: {
    name: 'add_update_feature_flags',
    value: 'add_update_feature_flags',
    description: ':triangular_flag_on_post: Add, update, or remove feature flags',
    command: 'git add . && git commit -m ":triangular_flag_on_post: chore: Add, update, or remove feature flags" && git push',
  },
  catch_errors: {
    name: 'catch_errors',
    value: 'catch_errors',
    description: ':goal_net: Catch errors',
    command: 'git add . && git commit -m ":goal_net: chore: Catch errors" && git push',
  },
  add_update_animations_transitions: {
    name: 'add_update_animations_transitions',
    value: 'add_update_animations_transitions',
    description: ':dizzy: Add or update animations and transitions',
    command: 'git add . && git commit -m ":dizzy: chore: Add or update animations and transitions" && git push',
  },
  deprecate_code: {
    name: 'deprecate_code',
    value: 'deprecate_code',
    description: ':wastebasket: Deprecate code that needs to be cleaned up',
    command: 'git add . && git commit -m ":wastebasket: chore: Deprecate code that needs to be cleaned up" && git push',
  },
  work_on_authorization_roles_permissions: {
    name: 'work_on_authorization_roles_permissions',
    value: 'work_on_authorization_roles_permissions',
    description: ':passport_control: Work on code related to authorization, roles and permissions',
    command: 'git add . && git commit -m ":passport_control: chore: Work on code related to authorization, roles and permissions" && git push',
  },
  remove_dead_code: {
    name: 'remove_dead_code',
    value: 'remove_dead_code',
    description: ':coffin: Remove dead code',
    command: 'git add . && git commit -m ":coffin: chore: Remove dead code" && git push',
  },
  add_update_business_logic: {
    name: 'add_update_business_logic',
    value: 'add_update_business_logic',
    description: ':necktie: Add or update business logic',
    command: 'git add . && git commit -m ":necktie: chore: Add or update business logic" && git push',
  },
  add_update_healthcheck: {
    name: 'add_update_healthcheck',
    value: 'add_update_healthcheck',
    description: ':stethoscope: Add or update healthcheck',
    command: 'git add . && git commit -m ":stethoscope: chore: Add or update healthcheck" && git push',
  },
  infrastructure_related_changes: {
    name: 'infrastructure_related_changes',
    value: 'infrastructure_related_changes',
    description: ':bricks: Infrastructure related changes',
    command: 'git add . && git commit -m ":bricks: chore: Infrastructure related changes" && git push',
  },
  improve_developer_experience: {
    name: 'improve_developer_experience',
    value: 'improve_developer_experience',
    description: ':technologist: Improve developer experience',
    command: 'git add . && git commit -m ":technologist: chore: Improve developer experience" && git push',
  },
  add_sponsorships_money_related_infrastructure: {
    name: 'add_sponsorships_money_related_infrastructure',
    value: 'add_sponsorships_money_related_infrastructure',
    description: ':money_with_wings: Add sponsorships or money related infrastructure',
    command: 'git add . && git commit -m ":money_with_wings: chore: Add sponsorships or money related infrastructure" && git push',
  },
  add_update_multithreading_concurrency_code: {
    name: 'add_update_multithreading_concurrency_code',
    value: 'add_update_multithreading_concurrency_code',
    description: ':thread: Add or update code related to multithreading or concurrency',
    command: 'git add . && git commit -m ":thread: chore: Add or update code related to multithreading or concurrency" && git push',
  },
  add_update_validation_code: {
    name: 'add_update_validation_code',
    value: 'add_update_validation_code',
    description: ':safety_vest: Add or update code related to validation',
    command: 'git add . && git commit -m ":safety_vest: chore: Add or update code related to validation" && git push',
  },
};

module.exports = templates;
