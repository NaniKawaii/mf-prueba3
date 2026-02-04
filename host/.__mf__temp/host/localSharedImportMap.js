
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    import {loadShare} from "@module-federation/runtime";
    const importMap = {
      
        "react": async () => {
          let pkg = await import("__mf__virtual/host__prebuild__react__prebuild__.js");
            return pkg;
        }
      ,
        "react-dom": async () => {
          let pkg = await import("__mf__virtual/host__prebuild__react_mf_2_dom__prebuild__.js");
            return pkg;
        }
      ,
        "styled-components": async () => {
          let pkg = await import("__mf__virtual/host__prebuild__styled_mf_2_components__prebuild__.js");
            return pkg;
        }
      
    }
      const usedShared = {
      
          "react": {
            name: "react",
            version: "19.2.4",
            scope: ["default"],
            loaded: false,
            from: "host",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"react"}' must be provided by host`);
              }
              usedShared["react"].loaded = true
              const {"react": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^19.2.4",
              
            }
          }
        ,
          "react-dom": {
            name: "react-dom",
            version: "19.2.4",
            scope: ["default"],
            loaded: false,
            from: "host",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"react-dom"}' must be provided by host`);
              }
              usedShared["react-dom"].loaded = true
              const {"react-dom": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^19.2.4",
              
            }
          }
        ,
          "styled-components": {
            name: "styled-components",
            version: "6.3.8",
            scope: ["default"],
            loaded: false,
            from: "host",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"styled-components"}' must be provided by host`);
              }
              usedShared["styled-components"].loaded = true
              const {"styled-components": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^6.3.8",
              
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      