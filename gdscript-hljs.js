export function registerGDScriptLanguage(hljs) {
  if (!hljs || typeof hljs.registerLanguage !== "function") return;
  if (hljs.getLanguage && hljs.getLanguage("gdscript")) return;

  hljs.registerLanguage("gdscript", () => {
    const KEYWORDS = [
      "and",
      "as",
      "assert",
      "await",
      "break",
      "breakpoint",
      "class",
      "class_name",
      "const",
      "continue",
      "elif",
      "else",
      "enum",
      "extends",
      "false",
      "for",
      "func",
      "if",
      "in",
      "is",
      "match",
      "not",
      "null",
      "or",
      "pass",
      "preload",
      "return",
      "self",
      "signal",
      "static",
      "super",
      "true",
      "var",
      "void",
      "while",
      "yield"
    ].join(" ");

    const BUILT_INS = [
      "Vector2",
      "Vector2i",
      "Vector3",
      "Vector3i",
      "Vector4",
      "Color",
      "Transform2D",
      "Transform3D",
      "Basis",
      "Quaternion",
      "PackedByteArray",
      "PackedInt32Array",
      "PackedFloat32Array",
      "PackedStringArray",
      "Array",
      "Dictionary",
      "Callable",
      "String",
      "StringName",
      "Node",
      "Node2D",
      "Node3D",
      "PhysicsRayQueryParameters3D"
    ].join(" ");

    return {
      name: "GDScript",
      aliases: ["gd"],
      keywords: {
        keyword: KEYWORDS,
        built_in: BUILT_INS
      },
      contains: [
        hljs.COMMENT("#", "$"),
        hljs.QUOTE_STRING_MODE,
        hljs.APOS_STRING_MODE,
        hljs.C_NUMBER_MODE,
        {
          className: "title.function",
          begin: /\b[A-Za-z_][A-Za-z0-9_]*(?=\s*\()/,
          relevance: 0
        },
        {
          className: "function",
          begin: /\bfunc\s+[A-Za-z_][A-Za-z0-9_]*/,
          returnBegin: true,
          contains: [
            {
              className: "keyword",
              begin: /func/
            },
            {
              className: "title",
              begin: /[A-Za-z_][A-Za-z0-9_]*/,
              relevance: 0
            }
          ]
        }
      ]
    };
  });
}
